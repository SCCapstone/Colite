import geopandas as gpd
import matplotlib.pyplot as plt
import matplotlib
from pandas import Series
import numpy as np
import os

def filter_columns(df, keep):
	"""Filter Pandas table df keeping only columns in keep"""
	cols = list(df)
	for col in keep:
		cols.remove(col)

	return df.drop(columns=cols)

def income_binning(return_colors=False):
	"""Return bins and color scheme for relative median income"""
	# First bin is -10 000..-8 000, next is -8 000..-6 000, ..., final is 14 000-16 000
	bins = np.arange(-10000,18000,2000)
	cmap = plt.cm.get_cmap('RdBu', len(bins))
	if not return_colors:
		return bins, cmap
	else:
		colors = []
		for i in range(cmap.N):
			rgb = cmap(i)[:3] # will return rgba, we take only first 3 so we get rgb
			colors.append(matplotlib.colors.rgb2hex(rgb))

		return bins, colors

def pop_density_binning(return_colors=False):
	"""Return bins and color scheme for population density"""
	# First bin is 0, next is 0.1-1, ..., final is > 10000
	bins = np.array([0, 1, 2, 4, 6, 8, 10, 50, 100, 200, 500, 1000, 1500, 2000, 2500, 5000, 10000])
	cmap = plt.cm.get_cmap('Reds', len(bins)+1)
	if not return_colors:
		return bins, cmap
	else:
		colors = []
		for i in range(cmap.N):
			rgb = cmap(i)[:3] # will return rgba, we take only first 3 so we get rgb
			colors.append(matplotlib.colors.rgb2hex(rgb))

		return bins, colors

def main():
	# Get statistics from Statistics Finland portal for year 2018 keeping only the selected data columns
	url = "http://geo.stat.fi/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=postialue:pno_tilasto_2018&outputFormat=json"
	keep_columns = ['nimi', 'posti_alue', 'he_vakiy', 'geometry', 'pinta_ala', 'hr_mtu']
	data = filter_columns(gpd.read_file(url), keep_columns)

	# Rename columns
	data.rename(columns={'he_vakiy': 'pop2018', 'pinta_ala': 'area', 'nimi': 'name', 'hr_mtu': 'income', 'posti_alue': 'zip'}, inplace=True)

	# Convert geometry to Google Maps compatible Lat/Long coordinates
	data.to_crs({'init': 'epsg:4326'}, inplace=True)

	# Income data in some postal code areas might be undefined (NaNs or -1.0)
	# In these areas, there are either no inhabitants at all, or too few inhabitans
	# so the income data is not shown for privacy reasons
	# Set the income in these regions to the national average
	data.replace(-1.0, np.nan, inplace=True)
	avg_income = np.nanmean(data['income'])
	data.fillna(avg_income, inplace=True)

	# Add column relative median income (w.r.t national average)
	data['income_relative'] = data['income']-avg_income

	# Add column for population density
	# First convert area from m^2 to km^2
	data['area'] *= 1e-6
	# Now calculate density in in citizens/km^2
	data['pop_density'] = data['pop2018']/data['area']

	# Round data to 2 decimal places to reduce size of resulting GeoJSON file
	data = data.round({'pop_density': 2, 'income_relative': 2})
	# To further reduce the file size, we could round the coordinates
	# of the Polygon objects as well
	# This is quite cumbersome with GeoPandas, so I opted to use the ogr2ogr tool

	# Assign colors to zip codes based on relative median income by binning data
	bins, cmap = income_binning()
	colors = []

	for i, row in data.iterrows():
		index = bins.searchsorted(row['income_relative'])
		colors.append(matplotlib.colors.rgb2hex(cmap(index)[:3]))

	data['fill'] = Series(colors, dtype='str', index=data.index)

	# Assign alternative colors for population density
	bins, cmap = pop_density_binning()
	colors = []

	for i, row in data.iterrows():
		index = bins.searchsorted(row['pop_density'])
		colors.append(matplotlib.colors.rgb2hex(cmap(index)[:3]))

	data['fill_density'] = Series(colors, dtype='str', index=data.index)

	# Save data as GeoJSON
	# Note the driver cannot overwrite an existing file,
	# so we must remove it first
	outfile = 'map_data.json'
	if os.path.isfile(outfile):
		os.remove(outfile)

	data.to_file(outfile, driver='GeoJSON')

if __name__ == '__main__':
	main()

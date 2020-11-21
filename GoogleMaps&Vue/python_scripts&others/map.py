from key import key
from get_data import income_binning, pop_density_binning

class Map(object):
    def __init__(self, filename = None):
        self._filename = filename

    @property
    def filename(self):
        return self._filename

    @filename.setter
    def filename(self, filename):
        self._filename = filename

    def __str__(self):
        '''Fills HTML template with color/label definitions and Google Maps API Key'''
        # Read template
        with open(self.filename, 'r') as fp:
          html = fp.readlines()

        html = ''.join(html)

        # API key
        html = html.replace('YOUR_API_KEY_HERE', key)

        # Labels and colors for default relative median income visualizion
        labels, colors = income_binning(return_colors=True)
        html = html.replace('COLOR_DEFINITIONS', ','.join(colors))
        html = html.replace('LABEL_DEFINITIONS', ','.join(str(label) for label in labels))

        # Labels and colors for population density visualizion
        labels, colors = pop_density_binning(return_colors=True)
        labels = list(labels)
        labels.append('> {}'.format(labels[-1]))
        html = html.replace('COLOR_ALTERNATE_DEFINITIONS', ','.join(colors))
        html = html.replace('LABEL_ALTERNATE_DEFINITIONS', ','.join(str(label) for label in labels))

        return html

def main():
    import webbrowser
    gmap = Map('map.html')
    outfile = 'map_statistics.html'
    with open(outfile, "w") as out:
        print(gmap, file=out)

    webbrowser.open_new_tab(outfile)

if __name__ == '__main__':
    main()
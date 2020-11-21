try:
	with open('../../.password/google-maps/api', 'r') as fp:
		key = fp.readlines()

	key = ''.join(key)

except:
	# Insert your API key here
	key = 'AIzaSyD3lI3tWTw58b9iKKYgoX-qZpwZndHwsDc'

build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

example: 
	rm -rf example/components
	rm -rf example/build
	cd example/app
	component install --dev
	component build -o ../build
	python -m SimpleHTTPServer

.PHONY: clean example

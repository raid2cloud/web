dev: 
	yarn run start

clean:
	yarn run clean
build: clean
	yarn run build


install:
	yarn install
	sed -i "s/puppeteerArgs: \[\],/puppeteerArgs: \[\"--no-sandbox\", \"--disable-setuid-sandbox\"\],/" ./node_modules/react-snap/index.js

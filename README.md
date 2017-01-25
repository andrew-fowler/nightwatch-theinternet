
To run on more browsers/environments change the npm test script in package.json to something like:

"test": "./node_modules/.bin/nightwatch -e chrome,firefox,ie10,ie11"


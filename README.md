# Holiday Agency

## Run

### To run the app locally:

- clone this repo
- in the root directory run npm install to install dependencies
- run npm start to start the dev server on port:3000
- run the test suite with npm test

## Notes

- I haven't been able to implement the search for connecting flights work correctly. There are 2 solutions which attempt this, the one which is used in the app is src/dataFuncs/flightCalculator.js. There is another in dataFuncs/dfs.js which is not used by the app.
- The test suite tests the data functions. One test is skipped as this highlights the conneting flights search issue.
- I have hard coded to not search for flights which I know do not exist as the fix for this would be part of a correctly functioning search.
- I have manually flights from the data where shorter flights on the same routes exist to improve results. This could be done programmatically, but a correctly functioning search would negate the need to do this.
- I believe some of the 'toAirport' costs in the example data are incorrect.

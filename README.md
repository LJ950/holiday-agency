# Holiday Agency

## Run

### To run the app locally:

- clone this repo
- in the root directory run npm install to install dependencies
- run npm start to start the dev server on port:3000

## Testing

- run the test suite with npm test
- The test suite tests the data functions. One test is skipped as this highlights the conneting flights search issue (see below).

## Notes

- The program returns the correct vehicle and cost for a journey to the airport. I believe some of the 'toAirport' costs in the example data are incorrect.
- It returns a correct non connecting flight and a valid connecting flights where applicable, however these may not be the shortest/cheapest available.
- I tried with 2 solutions to search connecting flights correctly, the one which is used in the app is src/dataFuncs/flightCalculator.js. There is another in dataFuncs/dfs.js which is not used by the app.
- I have hard coded to not search for flights which I know do not exist (to airport A).
- I have manually removed flights from the data where shorter flights on the same routes exist to improve results. This could be done programmatically, but a correctly functioning search would negate the need to do this.

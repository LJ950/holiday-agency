// const origin = "A";
const destination = "F";

const rawFlights = [
  "AB800",
  "BC900",
  "CD400",
  "DE400",
  "BF400",
  "CE300",
  "DE300",
  "EB600",
  "CE200",
  "DC700",
  "EB500",
  "FD200"
];

const flights = rawFlights.map(flight => {
  return {
    code: flight,
    origin: flight[0],
    destination: flight[1],
    distance: +flight.match(/[\d]+/g)[0]
  };
});

const dfs = destination => {
  const stack = [flights[1]];
  const routes = [];
  let currentNode;
  while (stack.length !== 0) {
    currentNode = stack.pop();
    routes.push(currentNode);
    if (currentNode.destination === destination) return routes;
    // eslint-disable-next-line no-loop-func
    flights.forEach((flight, index) => {
      if (currentNode.destination === flight.origin) {
        stack.push(flight);
      }
    });
  }
  console.log(`flights to ${destination} not found`);
};

console.log(dfs(destination));

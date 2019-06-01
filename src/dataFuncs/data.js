const rawFlights = [
  "AB800",
  "BC900",
  "CD400",
  // "DE400",
  "BF400",
  // "CE300",
  "DE300",
  // "EB600",
  "CE200",
  "DC700",
  "EB500",
  "FD200"
];

export const flights = rawFlights.map(flight => {
  return {
    code: flight,
    origin: flight[0],
    destination: flight[1],
    distance: +flight.match(/[\d]+/g)[0]
  };
});

export const journeys = [
  { passengers: 2, homeToAirport: "B20", destination: "D" },
  { passengers: 1, homeToAirport: "B30", destination: "D" },
  { passengers: 2, homeToAirport: "A20", destination: "D" },
  { passengers: 2, homeToAirport: "C30", destination: "A" },
  { passengers: 2, homeToAirport: "B10", destination: "C" },
  { passengers: 5, homeToAirport: "B10", destination: "C" },
  { passengers: 1, homeToAirport: "D25", destination: "B" },
  { passengers: 4, homeToAirport: "D40", destination: "A" },
  { passengers: 2, homeToAirport: "B5", destination: "D" },
  { passengers: 9, homeToAirport: "B30", destination: "D" }
];

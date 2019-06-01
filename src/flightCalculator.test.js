import { compileFlights, airportJourney } from "./dataFuncs/flightCalculator";

describe("compileFlights()", () => {
  it("returns a direct flight", () => {
    const journey = { passengers: 1, homeToAirport: "A10", destination: "B" };
    const origin = journey.homeToAirport[0];
    const destination = journey.destination;
    expect(
      compileFlights(origin, destination, journey.passengers)
    ).toMatchObject({
      codes: "AB800",
      cost: 80
    });
  });
  xit("returns single connecting flights when there is no direct flight", () => {
    const journey = { passengers: 2, homeToAirport: "B20", destination: "D" };
    const origin = journey.homeToAirport[0];
    const destination = journey.destination;
    expect(
      compileFlights(origin, destination, journey.passengers)
    ).toMatchObject({
      codes: "BF400-FD200",
      cost: 120
    });
  });
  it("returns flights with multiple connections when there is no direct flight", () => {
    const journey = { passengers: 3, homeToAirport: "A20", destination: "D" };
    const origin = journey.homeToAirport[0];
    const destination = journey.destination;
    expect(
      compileFlights(origin, destination, journey.passengers)
    ).toMatchObject({
      codes: "AB800-BC900-CD400",
      cost: 630
    });
  });
  it("return flight test", () => {
    const journey = { passengers: 3, homeToAirport: "B20", destination: "D" };
    const origin = journey.homeToAirport[0];
    const destination = journey.destination;
    expect(
      compileFlights(destination, origin, journey.passengers)
    ).toMatchObject({
      codes: "DE300-EB500",
      cost: 240
    });
  });
});

describe("airportJourney()", () => {
  it("returns correct vehicle and cost for up to 4 passengers", () => {
    const journey = { passengers: 2, homeToAirport: "B20", destination: "D" };
    expect(
      airportJourney(journey.passengers, journey.homeToAirport)
    ).toMatchObject({
      vehicle: "car",
      cost: 11
    });
  });
  it("returns correct vehicle and cost for up for over 4 and fewer than 8 passengers", () => {
    const journey = { passengers: 5, homeToAirport: "B10", destination: "C" };
    expect(
      airportJourney(journey.passengers, journey.homeToAirport)
    ).toMatchObject({
      vehicle: "car",
      cost: 14
    });
  });
  it("returns correct vehicle and cost for up for over 8 and fewer than 12 passengers", () => {
    const journey = { passengers: 9, homeToAirport: "B10", destination: "C" };
    expect(
      airportJourney(journey.passengers, journey.homeToAirport)
    ).toMatchObject({
      vehicle: "car",
      cost: 21
    });
  });
});

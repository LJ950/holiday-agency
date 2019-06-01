import { flights } from "./data";

export const compileFlights = (origin, destination, passengers) => {
  let directFlight = "";
  const originFlights = [];
  if (destination === "A") return { codes: "no flights found", cost: "-" };
  flights.forEach((flight, index) => {
    if (flight.origin === origin && flight.destination === destination) {
      directFlight = flight;
    }
    if (flight.origin === origin) {
      originFlights.push(flight);
    }
  });

  if (directFlight === "") {
    function findFlights(searchFlights) {
      let stack = [originFlights[0]];
      const searchedRoutes = [];
      const validRoutes = [];

      for (let i = 0; i < searchFlights.length; i++) {
        if (stack[stack.length - 1].destination === searchFlights[i].origin) {
          stack.push(searchFlights[i]);
        }
        searchedRoutes.push(searchFlights[i]);
        if (stack[stack.length - 1].destination === destination) {
          //found valid route - reset stack
          validRoutes.push(stack);
          stack = [originFlights[0]];
        }
      }

      const remainingFlights = searchFlights.filter(function(flight) {
        return !searchedRoutes.includes(flight);
      });
      if (remainingFlights.length <= 1) {
        return validRoutes;
      } else {
        findFlights(remainingFlights);
      }
    }
    let distanceTotal = 0;
    const foundFlights = [];
    findFlights(flights).forEach(route => {
      route.forEach(flight => {
        distanceTotal += flight.distance;
      });
      route.push(distanceTotal);
      foundFlights.push(route);
    });
    foundFlights.sort((a, b) => a[3] - b[3]);
    const formatFlights = foundFlights[0].slice(0, foundFlights[0].length - 1);
    return {
      codes: formatFlights
        .map(flight => {
          return flight.code;
        })
        .join("-"),
      cost: (foundFlights[0][foundFlights[0].length - 1] * passengers) / 10
    };
  } else {
    return {
      codes: directFlight.code,
      cost: (directFlight.distance * passengers) / 10
    };
  }
};

export const airportJourney = (passengers, journey) => {
  const distance = journey.slice(1);
  let taxiCost = 0.4 * distance;
  let carCost = 0.2 * distance;
  let numOfVehicles = 1;

  if (passengers > 4 && passengers < 9) {
    numOfVehicles = 2;
  } else if (passengers > 8 && passengers < 13) {
    numOfVehicles = 3;
  }
  taxiCost = taxiCost * numOfVehicles * 2;
  carCost = carCost * numOfVehicles * 2;
  carCost += 3 * numOfVehicles;
  // console.log(taxiCost, "<--taxi car-->", carCost);
  // console.log(numOfVehicles);
  if (taxiCost < carCost) return { vehicle: "taxi", cost: taxiCost };
  if (carCost < taxiCost) return { vehicle: "car", cost: carCost };
  if (carCost === taxiCost) return { vehicle: "cat or taxi", cost: carCost };
};

export default compileFlights;

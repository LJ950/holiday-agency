import React, { Component } from "react";
import { journeys } from "../dataFuncs/data";
import "./css/calculator.css";
import { compileFlights, airportJourney } from "../dataFuncs/flightCalculator";

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <h3>Input</h3>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>passengers</th>
              <th>homeToAirport</th>
              <th>destination</th>
            </tr>
            {journeys.map((journey, index) => {
              return (
                <tr key={index} className={this.rowClass(index)}>
                  <td>{index + 1}</td>
                  <td>{journey.passengers}</td>
                  <td>{journey.homeToAirport}</td>
                  <td>{journey.destination}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h3>Output</h3>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>vehicle</th>
              <th>vehicleReturnCost</th>
              <th>outboundFlightRoute</th>
              <th>outboundFlightCost</th>
              <th>inboundFlightRoute</th>
              <th>inboundFlightCost</th>
            </tr>
            {journeys.map((journey, index) => {
              return (
                <tr key={index} className={this.rowClass(index)}>
                  <td>{index + 1}</td>
                  <td>
                    {
                      airportJourney(journey.passengers, journey.homeToAirport)
                        .vehicle
                    }
                  </td>
                  <td>
                    {
                      airportJourney(journey.passengers, journey.homeToAirport)
                        .cost
                    }
                  </td>
                  <td>
                    {
                      compileFlights(
                        journey.homeToAirport[0],
                        journey.destination,
                        journey.passengers
                      ).codes
                    }
                  </td>
                  <td>
                    {
                      compileFlights(
                        journey.homeToAirport[0],
                        journey.destination,
                        journey.passengers
                      ).cost
                    }
                  </td>
                  <td>
                    {
                      compileFlights(
                        journey.destination,
                        journey.homeToAirport[0],
                        journey.passengers
                      ).codes
                    }
                  </td>
                  <td>
                    {
                      compileFlights(
                        journey.destination,
                        journey.homeToAirport[0],
                        journey.passengers
                      ).cost
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  rowClass = rowNum => {
    if (rowNum % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  };
}

export default Calculator;

import React, { Component } from "react";
import "./css/calculator.css";
import { compileFlights, airportJourney } from "../dataFuncs/flightCalculator";

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
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
            {this.props.journeys.map((journey, index) => {
              const airportTravel = airportJourney(
                journey.passengers,
                journey.homeToAirport
              );
              const outboundFlights = compileFlights(
                journey.homeToAirport[0],
                journey.destination,
                journey.passengers
              );
              const inboundFlights = compileFlights(
                journey.destination,
                journey.homeToAirport[0],
                journey.passengers
              );
              return (
                <tr key={journey.id} className={this.props.rowClass(index)}>
                  <td>{index + 1}</td>
                  <td>{airportTravel.vehicle}</td>
                  <td>{airportTravel.cost}</td>
                  <td>{outboundFlights.codes}</td>
                  <td>{outboundFlights.cost}</td>
                  <td>{inboundFlights.codes}</td>
                  <td>{inboundFlights.cost}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;

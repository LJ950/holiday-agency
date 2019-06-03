import React, { Component } from "react";
import { journeys } from "../dataFuncs/data";
import "./css/calculator.css";

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
                <tr key={journey.id} className={this.props.rowClass(index)}>
                  <td>{index + 1}</td>
                  <td>{journey.passengers}</td>
                  <td>{journey.homeToAirport}</td>
                  <td>{journey.destination}</td>
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

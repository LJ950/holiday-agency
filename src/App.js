import React from "react";
import Header from "./components/Header";
import InputData from "./components/InputData";
import Calculator from "./components/Calculator";
import { journeys } from "./dataFuncs/data";

const App = () => {
  // const journeys = journeys;

  return (
    <div className="app">
      <Header />
      <InputData journeys={journeys} rowClass={rowClass} />
      <Calculator journeys={journeys} rowClass={rowClass} />
    </div>
  );
};
const rowClass = rowNum => {
  if (rowNum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};
export default App;

import React, { useState } from "react";
import "./App.css";
import MortgageForm from "./components/MortgageForm";
import MortgageSummary from "./components/MortgageSummary";

function App() {
  const [summary, setSummary] = useState({
    termperiod: 0,
    permonth: 0,
    total: 0,
    mortgageamount: 0,
  });

  const executeSummary = (value) => {
    setSummary(value);
  };

  return (
    <div className="App">
      <MortgageForm executeSummary={executeSummary} />
      <MortgageSummary summary={summary} />
    </div>
  );
}

export default App;

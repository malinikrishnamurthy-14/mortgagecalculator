import React from "react";

const MortgageSummary = ({ summary }) => {
  return (
    <div className="summary-container">
      <h1>Payment Summary</h1>
      <ol>
        <li className="summary-point">Number of Payments: {summary.termperiod}</li>
        <li className="summary-point">Mortgage Payment: {summary.permonth}</li>
        <li className="summary-point">Principal Payments: {summary.mortgageamount}</li>
        <li className="summary-point">
          Interest Payments: {summary.total - summary.mortgageamount}
        </li>
        <li className="summary-point">Total Cost: {summary.total}</li>
      </ol>
    </div>
  );
};

export default MortgageSummary;

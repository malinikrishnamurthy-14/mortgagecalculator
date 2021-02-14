const Fields = [
  {
    id: 0,
    fname: "mortgageamount",
    type: "input",
    label: "Mortgage Amount",
    text:
      "The amount you expect to borrow from your financial institution. It is calculated as the purchase price of your home, minus the down payment plus any applicable mortgage loan insurance premium you have to pay.",
  },
  {
    id: 1,
    fname: "interestrate",
    type: "input",
    label: "Interest Rate",
    text: "Annual interest rate for this mortgage.",
  },
  {
    id: 2,
    fname: "amortizationperiod",
    type: "dropdown",
    label: "Amortization Period",
    text:
      "The number of years and months over which you will repay this loan. The most common amortization period is 25 years. Not to be confused with the term of your loan, which is the duration of the loan agreement you signed with your financial institution and that has to be renewed regularly. Terms are generally for 1 to 10 years.",
    values: ["1 Years", "2 Years", "3 Years", "4 Years", "5 Years", "6 Years"],
  },
  {
    id: 3,
    fname: "paymentfrequency",
    type: "dropdown",
    label: "Payment Frequency",
    text:
      "By choosing an accelerated payment frequency, you can reduce your amortization period and save thousands of dollars in interest in the long run. For example, the accelerated bi-weekly payment allows you to pay half of your monthly payment every two weeks. You will therefore make 26 payments a year, the equivalent of one extra monthly payment a year.",
    values: ["Accelerated Weekly", "Weekly"],
  },
  {
    id: 4,
    fname: "term",
    type: "dropdown",
    label: "Term",
    text: "The number of term years.",
    values: ["1 Years", "2 Years", "3 Years", "4 Years", "5 Years", "6 Years"],
  },
];

export default Fields;

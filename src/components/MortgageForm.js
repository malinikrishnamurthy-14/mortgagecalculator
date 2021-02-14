import React, { useState, useEffect } from "react";
import Fields from "../data/fields-data";
import Label from "./Label";
import Info from "./Info";

const MortgageForm = ({ executeSummary }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataArray = [];
    Fields.map((field) => {
      dataArray.push({
        id: field.id,
        fname: field.fname,
        value: 0,
        infoTextStyle: "hide-info",
      });
    });
    setData([...dataArray]);
  }, []);

  const onUpdateStyleCallBack = (fname, value, event) => {
    event.preventDefault();
    const newData = data.map((item) =>
      item.fname === fname ? { ...item, infoTextStyle: value } : item
    );
    setData(newData);
  };

  const onValueChange = (fname, value) => {
    const newData = data.map((item) =>
      item.fname === fname ? { ...item, value: value } : item
    );
    setData(newData);
  };

  const renderInput = (field) => {
    return (
      <input
        data-testid={`${field.fname}-input`}
        type="text"
        className="input"
        value={data[field.id].value}
        onChange={(event) => onValueChange(field.fname, event.target.value)}
      ></input>
    );
  };

  const renderDropDown = (field) => {
    return (
      <select
        data-testid={`${field.fname}-dropdown`}
        className="dropdown"
        value={data[field.id].value}
        onChange={(event) => onValueChange(field.fname, event.target.value)}
      >
        {field.values.map((item, key) => (
          <option key={key} value={item.replace(/" "/g, "")}>
            {item}
          </option>
        ))}
      </select>
    );
  };

  const calculate = (event) => {
    event.preventDefault();

    const [
      mortgageamount,
      interestrate,
      aperiod,
      paymentfrequency,
      term,
    ] = data.map((item) => item.value);

    if (mortgageamount > 0 && interestrate > 0) {
      const termperiod = term === 0 ? 12 : term.charAt[0] * 12;
      const total =
        parseInt(mortgageamount) +
        parseInt((mortgageamount * interestrate) / 100);
      const permonth = total / termperiod;
      executeSummary({
        termperiod: termperiod,
        permonth: permonth,
        total: total,
        mortgageamount: mortgageamount,
      });
    }
  };
  return (
    <form
      data-testid="form-container"
      className="form-container"
      onSubmit={(event) => calculate(event)}
    >
      <h1>Mortgage Calculator</h1>
      {data.map((field, key) => {
        const fieldMeta = Fields.find((item) => item.fname === field.fname);
        return (
          <div key={key} className="form-element-container">
            <div className="form-element-child">
              <Label
                fname={field.fname}
                label={fieldMeta.label}
                onCallBack={onUpdateStyleCallBack}
              />
              {fieldMeta.type === "input"
                ? renderInput(fieldMeta)
                : renderDropDown(fieldMeta)}
            </div>
            <Info
              fname={field.fname}
              style={data[field.id].infoTextStyle}
              onCallBack={onUpdateStyleCallBack}
            />
          </div>
        );
      })}

      <button data-testid="calculate-button" className="calculate-button">
        Calculate
      </button>
    </form>
  );
};

export default MortgageForm;

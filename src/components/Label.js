import React from "react";
import InfoIcon from "../images/info.gif";

const Label = ({fname, label, onCallBack }) => {
  const updateStyle = (ev) => {
    onCallBack(fname, "show-info", ev);
  };

  return (
    <div className="label-container">
      <img
        data-testid={`${fname}-label`}
        src={InfoIcon}
        alt="info"
        onClick={(ev) => updateStyle(ev)}
      ></img>
      {` ${label}:`}
    </div>
  );
};

export default Label;

import React, { useState, useEffect } from "react";
import InfoImage from "../images/info1.png";
import Fields from "../data/fields-data";

const Info = ({ fname, style, onCallBack }) => {
  const [infoText, setInfoText] = useState("");

  const hideInfoText = (ev) => {
    onCallBack(fname, "hide-info", ev);
  };

  useEffect(() => {
    const fieldDetails = Fields.find((item) => item.fname === fname);
    setInfoText(fieldDetails.text);
  }, []);

  return (
    <div data-testid={`${fname}-info-container`} className={style}>
      <div className="color-strip"></div>
      <div>
        <img
          data-testid={`${fname}-info-image`}
          className="info-image"
          src={InfoImage}
          alt="info"
        ></img>
        <span data-testid={`${fname}-info-text`} className="info-text">
          {infoText}
        </span>
        <div>
          <button
            data-testid={`${fname}-close-button`}
            className="close-button"
            onClick={(ev) => hideInfoText(ev)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;

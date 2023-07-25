import React from "react";
import "./ChartBar.css";
const ChartBar = (props) => {
   
    let chartFillValue='0%';
    if(props.maxValue>0){
        chartFillValue = Math.round((props.value*100)/props.maxValue)+'%';
    }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: chartFillValue }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;

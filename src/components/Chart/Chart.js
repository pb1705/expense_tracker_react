import React from "react";
import './Chart.css';
import ChartBar from './ChartBar';
const Chart =(props)=> {
    let datapointvalues=props.dataPoints.map((datapoint)=>{return datapoint.value});
    let maxDataValue = Math.max(...datapointvalues);
  
    return (
        <div className="chart">
            {props.dataPoints.map((datapoint)=>{
                
                return <ChartBar label={datapoint.label} maxValue ={maxDataValue} value={datapoint.value} key={datapoint.label}></ChartBar>
            })}
        </div>
    );
}

export default Chart;
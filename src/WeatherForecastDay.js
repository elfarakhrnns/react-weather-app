import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecastDay">{day(props.data.time)}</div>
      <WeatherIcon code={props.data.condition.icon} size={36} />
      <div className="WeatherForecastTemperature">
        <span className="WeatherForecastTemperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecastTemperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}

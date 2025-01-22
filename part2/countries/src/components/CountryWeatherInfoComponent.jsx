import HeaderComponent from "./HeaderComponent.jsx";
import { useEffect } from "react";

export default function CountryWeatherInfoComponent({ country, weather, setWeather }) {

  useEffect(() => {
    setWeather(null);
  }, [country]);

  if (!weather) {
    return (
      <>
        <HeaderComponent value={`Weather in ${country.name.common}`} />
        <p>Loading weather data, please wait...</p>
      </>
    )
  }

  return (
    <>
      <HeaderComponent value={`Weather in ${country.name.common}`} />
      <table id="weatherTable">
        <thead>
        <tr>
          <th>Time</th>
          <th>Weather</th>
        </tr>
        </thead>
        <tbody>
        {[...weather.hourly.time].map((time, idx) => (
          <tr key={time}>
            <td>{time} {weather.timezone_abbreviation}</td>
            <td>{weather.hourly.temperature_2m[idx]} {weather.hourly_units.temperature_2m}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>

  )
}
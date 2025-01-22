import HeaderComponent from "./HeaderComponent.jsx";
import { useEffect, useState } from "react";
import CountryWeatherInfoComponent from "./CountryWeatherInfoComponent.jsx";

export default function CountryInfoComponent({ chosenCountry, openMeteoHttpClient }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!chosenCountry) {
      return;
    }

    openMeteoHttpClient.getWeatherForToday(chosenCountry.latlng[0], chosenCountry.latlng[1])
      .then(weather => setWeather(weather));
  }, [chosenCountry]);

  if (!chosenCountry) {
    return (
      <div id="countryInfo">
        <p>Choose a country, and its information will show up here.</p>
      </div>
    );
  }


  return (
    <div id="countryInfo">
      <HeaderComponent value={chosenCountry.name.common} />
      <img
        id="countryFlag"
        width="200"
        src={chosenCountry.flags.svg}
        alt={chosenCountry.flags.alt}
      />
      <br />
      <p><strong>Area</strong>: {chosenCountry.area}</p>
      <p><strong>Capital(s)</strong>: {[...chosenCountry.capital].join(", ")}</p>
      <p><strong>Country name</strong>: {chosenCountry.name.common}</p>
      <p><strong>Official country name</strong>: {chosenCountry.name.official}</p>
      <div><strong>Currencies</strong>:
        <ul>
          {[...Object.entries(chosenCountry.currencies)].map(entry =>
            <li key={entry[0]}>{entry[0]} ({entry[1].name})</li>)}
        </ul>
      </div>
      <p><strong>Languages</strong>: {[...Object.values(chosenCountry.languages)].join(", ")}</p>
      <hr />
      <CountryWeatherInfoComponent
        country={chosenCountry}
        weather={weather}
        setWeather={setWeather}
      />
    </div>
  );
}
import HeaderComponent from "./components/HeaderComponent.jsx";
import CountriesControlComponent from "./components/CountriesControlComponent.jsx";
import CountriesListComponent from "./components/CountriesListComponent.jsx";
import { useEffect, useState } from "react";
import CountriesHttpClient from "./clients/CountriesHttpClient.js";
import "./css/style.css";
import CountryInfoComponent from "./components/CountryInfoComponent.jsx";
import OpenMeteoHttpClient from "./clients/OpenMeteoHttpClient.js";

const countriesHttpClient = new CountriesHttpClient();
const openMeteoHttpClient = new OpenMeteoHttpClient();

function App() {
  const [countries, setCountries] = useState([]);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [chosenCountry, setChosenCountry] = useState();

  useEffect(() => {
    countriesHttpClient.getAll()
      .then(countries => {
        countries.sort((c1, c2) => c1.name.common.localeCompare(c2.name.common));
        setCountries(countries);
        setDisplayedCountries(countries);
      });
  }, []);

  if (countries.length === 0) {
    return (
      <div id="container">
        <HeaderComponent value="Countries" />
        <CountriesControlComponent
          setDisplayedCountries={setDisplayedCountries}
        />
        <p>Loading countries, please wait...</p>
      </div>
    )
  }

  return (
    <div id="container">
      <HeaderComponent value="Countries" />
      <CountriesControlComponent
        countries={countries}
        setDisplayedCountries={setDisplayedCountries}
        setIsFiltered={setIsFiltered}
      />
      <div id="countriesContentContainer">
        <CountriesListComponent
          isFiltered={isFiltered}
          displayedCountries={displayedCountries}
          setChosenCountry={setChosenCountry}
        />
        <CountryInfoComponent
          chosenCountry={chosenCountry}
          openMeteoHttpClient={openMeteoHttpClient}
        />
      </div>
    </div>
  );
}

export default App;

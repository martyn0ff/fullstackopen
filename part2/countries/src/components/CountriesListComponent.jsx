import CountryListItemComponent from "./CountryListItemComponent.jsx";
import { config } from "../config.json";

export default function CountriesListComponent({ isFiltered, displayedCountries, setChosenCountry }) {

  if (isFiltered && displayedCountries.length > config.maxSearchResultCount) {
    return <p>Filter result exceeds {config.maxSearchResultCount} countries. Please be more specific.</p>
  }

  return (
    <ul id="countryList">
      {displayedCountries.map(country => <CountryListItemComponent
        key={`item-${country.cca2}`}
        country={country}
        setChosenCountry={setChosenCountry}
      />)}
    </ul>
  );
}
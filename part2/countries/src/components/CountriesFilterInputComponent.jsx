import { useState } from "react";

export default function CountriesFilterInputComponent({ countries, setDisplayedCountries, setIsFiltered }) {

  const [inputValue, setInputValue] = useState("");

  function handleOnInput(event) {
    const matchingCountries = countries
      .filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase()));
    if (event.target.value === "") {
      setIsFiltered(false);
      setDisplayedCountries(countries);
    }
    else {
      setIsFiltered(true);
      setDisplayedCountries(matchingCountries);
    }

    setInputValue(event.target.value);
  }

  return (
    <div>
      <label htmlFor="countryFilter">Filter countries</label>
      <input
        type="text"
        name="countryFilter"
        id="countryFilterInput"
        value={inputValue}
        onInput={handleOnInput}
      />
    </div>
  );
}
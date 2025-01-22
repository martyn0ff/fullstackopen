import CountriesFilterInputComponent from "./CountriesFilterInputComponent.jsx";

export default function CountriesControlComponent({ countries, setDisplayedCountries, setIsFiltered}) {
  return (
    <div id="countryControl">
      <CountriesFilterInputComponent
        countries={countries}
        setDisplayedCountries={setDisplayedCountries}
        setIsFiltered={setIsFiltered}
      />
    </div>
  )
}
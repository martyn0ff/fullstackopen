export default function CountryListItemComponent({ country, setChosenCountry }) {

    function handleOnClick() {
        setChosenCountry(country);
    }

    return (
      <li key={country.cca2}>
          <a
            href={`#${country.cca2}`}
            onClick={handleOnClick}
          >
              {country.name.common}
          </a>
      </li>
    );
}
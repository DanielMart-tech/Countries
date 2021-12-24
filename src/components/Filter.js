import CountryInfo from "./CountryInfo";
import CountryList from "./CountryList";

const Filter = ({ filter, name, capital, population, languages, flag }) => {
  return (
    <>
      {filter.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filter.length === 1 ? (
        <CountryInfo
          name={name.common}
          capital={capital[0]}
          population={population}
          languages={languages}
          flag={flag}
        />
      ) : (
        filter.map((element) => (
          <div key={element.cca2}>
            <CountryList element={element} />
          </div>
        ))
      )}
    </>
  );
};

export default Filter;

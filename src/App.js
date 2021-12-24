import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleCountryName = (e) => {
    let newName = e.target.value;
    setCountryName(newName);
    if (newName) {
      const filteredCountry = countries.filter((country) =>
        country.name.common.toLowerCase().startsWith(newName.toLowerCase())
      );
      setFilter(filteredCountry);
    } else {
      setFilter([]);
    }
  };

  const { name, capital, population, languages, flag } =
    filter.length === 1 && filter[0];

  return (
    <div>
      <Search countryName={countryName} handleCountryName={handleCountryName} />
      <Filter
        filter={filter}
        name={name}
        capital={capital}
        population={population}
        languages={languages}
        flag={flag}
      />
    </div>
  );
}

export default App;

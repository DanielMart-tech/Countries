import { useState, useEffect } from "react";
import axios from "axios";

const CountryInfo = ({ name, capital, population, languages, flag }) => {
  const [weather, setWeather] = useState({});

  const lang = Object.values(languages);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=00503b5d01d59dd5f8e8a1f78a98057e&query=${capital}`
      )
      .then((response) =>
        setWeather(() => {
          const { current } = response.data;
          return current;
        })
      );
  }, [capital]);

  return (
    <>
      <div>
        <h2>{name}</h2>
        <p>capital {capital}</p>
        <p>population {population}</p>
        <h3>Spoken languages</h3>
        <ul>
          {lang.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
        <div>{flag}</div>
        <h3>Weather in {capital}</h3>
        <p>
          <strong>temperature:</strong> {weather.temperature} Celcius
        </p>
        <img src={weather.weather_icons} alt={weather.weather_descriptions} />
        <p>
          <strong>wind</strong> {weather.wind_speed} mph direction{" "}
          {weather.wind_dir}
        </p>
      </div>
    </>
  );
};

export default CountryInfo;

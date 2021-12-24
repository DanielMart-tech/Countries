import { useState } from "react";
import CountryInfo from "./CountryInfo";

const Btn = ({ element }) => {
  const [toggle, setToggle] = useState({ visibility: false });

  const handleClick = () => {
    setToggle((state) => ({ visibility: !state.visibility }));
  };

  return (
    <>
      <button onClick={handleClick}>show</button>
      {toggle.visibility && (
        <CountryInfo
          name={element.name.common}
          capital={element.capital[0]}
          population={element.population}
          languages={element.languages}
          flag={element.flag}
        />
      )}
    </>
  );
};

export default Btn;

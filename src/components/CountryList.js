import Btn from "./Btn";

const CountryList = ({ element }) => {
  return (
    <>
      <p>{element.name.common}</p>
      <Btn element={element} />
    </>
  );
};

export default CountryList;

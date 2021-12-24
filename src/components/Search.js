const Search = ({ countryName, handleCountryName }) => {
  return (
    <>
      <form>
        <label htmlFor="country">find countries</label>
        <input id="country" value={countryName} onChange={handleCountryName} />
      </form>
    </>
  );
};

export default Search;

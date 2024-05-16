import App from "../App";
import AppName from "./AppName";
import Container from "./Container";
import SearchInput from "./SearchInput";
import BedTypes from "./BedTypes";
import RecentSearch from "./RecentSearch";
const Beds = ({ results, handleOnKey, recentSearches }) => {
  return (
    <>
      <AppName name="Beds Availability"></AppName>

      <SearchInput
        text="search bed type"
        handleOnKey={handleOnKey}
        results={results}
      ></SearchInput>
      <BedTypes></BedTypes>
      <RecentSearch recentSearches={recentSearches}></RecentSearch>
      <center>
        <h3>Results : {results}</h3>
        <Container>
          <AppName name="CGC landran hospital"></AppName>
          <p>
            {" "}
            CGC landran hopitals is one of the finest hospitals we have ever
            seen ,with all newly updated technologies and the finenst doctors
            from the world.
          </p>
        </Container>
      </center>
    </>
  );
};
export default Beds;

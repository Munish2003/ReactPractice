import AppName from "./AppName";
import SearchInput from "./SearchInput";
import MedsType from "./MedsType";
import Container from "./Container";
import MedsSearchInput from "./MedsSearchInput";
import RecentMed from "./RecentMed";
const Meds = ({ MedsResults, MedsHandleOnKey, recentMedSearches }) => {
  return (
    <>
      <AppName name="Medicine Availability"></AppName>
      <MedsSearchInput
        text="search medicines here"
        MedsResults={MedsResults}
        MedsHandleOnKey={MedsHandleOnKey}
      ></MedsSearchInput>
      <MedsType></MedsType>
      <RecentMed recentMedSearches={recentMedSearches}></RecentMed>
      <center>
        <h3>Results : {MedsResults}</h3>
        <Container>
          <AppName name="CGC Medicos"></AppName>
          <p>
            {" "}
            CGC Medicos is one of the finest medical store we have ever seen
            ,with all newly updated technologies and the finenst doctors from
            the world.
          </p>
        </Container>
      </center>
    </>
  );
};

export default Meds;

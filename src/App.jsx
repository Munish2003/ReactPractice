import "./App.css";
import Container from "./components/Container";
import AppName from "./components/AppName";
import Beds from "./components/Beds";
import Meds from "./components/Meds";
import { useState } from "react";
function App() {
  let [results, setResults] = useState("Nothing Searched");
  const handleOnKey = (event) => {
    console.log(event);
    if (event.key === "Enter") {
      console.log(event.target.value);
      setRecentSearches(event.target.value);
      setResults(event.target.value);
    }
  };

  //for recent search
  let [recentSearches, setRecent] = useState([]);
  const setRecentSearches = (newSearch) => {
    if (recentSearches.includes(newSearch)) {
      alert("you have already searched this before");
    } else {
      let newSearches = [...recentSearches, newSearch];
      setRecent(newSearches);
    }
  };
  let [MedsResults, MedsSetResults] = useState("Nothing Searched");
  const MedsHandleOnKey = (event) => {
    console.log(event);
    if (event.key === "Enter") {
      // console.log(event.target.value);
      setMedRecentSearches(event.target.value);
      MedsSetResults(event.target.value);
    }
  };
  //for recent search
  let [recentMedSearches, setMedRecent] = useState([]);
  const setMedRecentSearches = (newSearch) => {
    if (recentMedSearches.includes(newSearch)) {
      alert("you have already searched this before");
    } else {
      let newSearches = [...recentMedSearches, newSearch];
      setMedRecent(newSearches);
    }
  };

  return (
    <>
      <AppName name="Life Balance Link"></AppName>
      <div className="mainDiv">
        <Container>
          <Beds
            results={results}
            handleOnKey={handleOnKey}
            recentSearches={recentSearches}
          ></Beds>
        </Container>
        <Container>
          <Meds
            MedsResults={MedsResults}
            MedsHandleOnKey={MedsHandleOnKey}
            recentMedSearches={recentMedSearches}
          ></Meds>
        </Container>
      </div>
    </>
  );
}

export default App;

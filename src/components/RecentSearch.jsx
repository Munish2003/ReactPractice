const RecentSearch = ({ recentSearches }) => {
  return (
    <>
      <center>
        <h2>Recent Searches</h2>
      </center>

      <ul>
        {recentSearches.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
    </>
  );
};

export default RecentSearch;

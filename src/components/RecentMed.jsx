const RecentMed = ({ recentMedSearches }) => {
  return (
    <>
      {console.log(recentMedSearches)}
      <center>
        <h2>Recent Searches</h2>
      </center>
      <ul>
        {recentMedSearches.map((searches) => (
          <li key={searches}>{searches}</li>
        ))}
      </ul>
    </>
  );
};

export default RecentMed;

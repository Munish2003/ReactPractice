import styles from "./SearchInput.module.css";
const SearchInput = ({ text, handleOnKey, results }) => {
  return (
    <>
      <center>
        <input
          type="text"
          className={styles.searchInput}
          placeholder={text}
          onKeyDown={handleOnKey}
        />

        <button className={styles.btn}>Search</button>
      </center>
      {/* {console.log(results)} */}
    </>
  );
};
export default SearchInput;

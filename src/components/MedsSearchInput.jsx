import styles from "./SearchInput.module.css";
const MedsSearchInput = ({ text, MedsHandleOnKey, MedsResults }) => {
  return (
    <>
      <center>
        <input
          type="text"
          className={styles.searchInput}
          placeholder={text}
          onKeyDown={MedsHandleOnKey}
        />

        <button className={styles.btn}>Search</button>
      </center>
      {/* {console.log(results)} */}
    </>
  );
};
export default MedsSearchInput;

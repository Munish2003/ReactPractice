import styles from "./AppName.module.css";
function AppName({ name }) {
  return <h1 className={styles.appName}>{name}</h1>;
}

export default AppName;

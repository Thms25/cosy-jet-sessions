import styles from "/styles/loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.artistLoading}>
      <h1>... Loading ...</h1>
      <h2>Fetching Artist's data</h2>
      <p>Please wait just a few instants</p>
      <p>:)</p>
    </div>
  );
};

export default Loading;

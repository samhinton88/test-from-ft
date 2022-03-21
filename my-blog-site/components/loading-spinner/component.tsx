import styles from './loading-spinner.module.css';

export const LoadingSpinner = () => {
  return (
    <div className={styles.loadingRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

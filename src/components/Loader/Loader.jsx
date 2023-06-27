import { RotatingLines } from 'react-loader-spinner';
import styles from './loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.LoaderContainer}>
      <RotatingLines
        strokeColor="#36444d"
        strokeWidth="5"
        animationDuration="0.75"
        width="30"
        visible={true}
      />
    </div>
  );
};

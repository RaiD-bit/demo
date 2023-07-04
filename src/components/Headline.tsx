import { FunctionComponent } from "react";
import styles from "./Headline.module.css";
const Headline: FunctionComponent = () => {
  return (
    <div className={styles.headline}>
      <div className={styles.welcomeBack}>Welcome back</div>
      <div className={styles.welcomeBackPlease}>
        Welcome back! Please enter your details.
      </div>
    </div>
  );
};

export default Headline;

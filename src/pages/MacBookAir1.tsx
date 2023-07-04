import { FunctionComponent } from "react";
import { TextField, Button } from "@mui/material";
import RightSideIcon from "../components/RightSideIcon";
import Headline from "../components/Headline";
import PasswordForm from "../components/PasswordForm";
import styles from "./MacBookAir1.module.css";
const MacBookAir1: FunctionComponent = () => {
  return (
    <div className={styles.macbookAir1}>
      <RightSideIcon />
      <Headline />
      <TextField
        className={styles.emailForm}
        sx={{ width: 315 }}
        color="primary"
        variant="outlined"
        defaultValue="Email"
        type="text"
        label="Enter your email"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <PasswordForm />
      <Button
        className={styles.signInButton}
        sx={{ width: 313.96722412109375 }}
        variant="contained"
        color="primary"
      >
        Sign in
      </Button>
      <div className={styles.signInButtonGoogle}>
        <img
          className={styles.freeIconGoogle3002211}
          alt=""
          src="/freeicongoogle300221-1@2x.png"
        />
        <div className={styles.signInWith}>Sign in with Google</div>
      </div>
      <div className={styles.dontHaveAnContainer}>
        <span>Don’t have an account?</span>
        <span className={styles.span}>{` `}</span>
        <span className={styles.signUpFo}>Sign up fo free!</span>
      </div>
      <div className={styles.rememberForgot}>
        <div className={styles.forgotPassword}>Forgot password</div>
        <div className={styles.rememberMe}>Remember me</div>
        <div className={styles.rememberForgotChild} />
      </div>
    </div>
  );
};

export default MacBookAir1;

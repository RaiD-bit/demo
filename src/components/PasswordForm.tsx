import { FunctionComponent } from "react";
import { TextField } from "@mui/material";
import styles from "./PasswordForm.module.css";
const PasswordForm: FunctionComponent = () => {
  return (
    <div className={styles.passwordForm}>
      <TextField
        className={styles.passwordFormChild}
        sx={{ width: 313.96722412109375 }}
        color="primary"
        variant="outlined"
        type="text"
        label="password"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <div className={styles.password}>Password</div>
    </div>
  );
};

export default PasswordForm;

import React from "react";
import { useStyles } from "./Header.style";

export const Header = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <h1>Passwordify: сгенерируй свой пароль!</h1>
    </div>
  );
};

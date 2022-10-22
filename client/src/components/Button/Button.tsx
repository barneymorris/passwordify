import { CircularProgress } from "@mui/material";
import React from "react";
import { useStyles } from "./Button.style";

type Props = {
  isLoading: boolean;
  label: string;
};

export const Button: React.FC<Props> = ({ isLoading, label }) => {
  const { classes } = useStyles();

  return (
    <button className={classes.button}>
      {isLoading ? <CircularProgress color="warning" /> : label}
    </button>
  );
};

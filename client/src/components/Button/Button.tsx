import { CircularProgress } from "@mui/material";
import React from "react";
import { useStyles } from "./Button.style";

type Props = {
  isLoading: boolean;
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
};

export const Button: React.FC<Props> = ({
  isLoading,
  label,
  onClick,
  isDisabled,
}) => {
  const { classes } = useStyles();

  return (
    <button disabled={isDisabled} onClick={onClick} className={classes.button}>
      {isLoading ? <CircularProgress size={32} color="warning" /> : label}
    </button>
  );
};

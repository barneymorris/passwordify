import React, { useCallback } from "react";
import { useStyles } from "./Result.style";
import Tooltip from "@mui/material/Tooltip";

type Props = {
  result: string;
};

export const Result: React.FC<Props> = ({ result }) => {
  const { classes } = useStyles();

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(result);
  }, [result]);

  return (
    <Tooltip onClick={handleCopy} title="Скопировать" placement="bottom">
      <div className={classes.result}>{result}</div>
    </Tooltip>
  );
};

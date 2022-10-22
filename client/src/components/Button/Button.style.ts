import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  button: {
    padding: 16,
    background: "peachpuff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: 24,
    cursor: "pointer",
  },
}));

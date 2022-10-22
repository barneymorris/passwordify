import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  result: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "24px 48px",
    textAlign: "center",
    fontSize: 32,
    fontWeight: 700,
    width: "fit-content",
    margin: "0 auto",
    cursor: "pointer",
    marginBottom: 64,
  },
}));

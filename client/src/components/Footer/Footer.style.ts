import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  wrapper: {
    background: "grey",
  },

  content: {
    color: "#fff",
    padding: 16,
    width: 300,
    margin: "0 auto",
  },

  social: {
    marginTop: 16,
    display: "flex",
    alignItems: "center",
  },

  telegram: {
    maxWidth: 32,
    maxHeight: 32,
    marginLeft: 16,
    display: "block",
  },
}));

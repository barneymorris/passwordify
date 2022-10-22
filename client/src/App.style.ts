import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  contentWrapper: {
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
  },

  buttonWrapper: {
    marginTop: 48,
  },
}));

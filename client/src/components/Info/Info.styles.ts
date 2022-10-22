import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  wrapper: {
    marginTop: 16,
  },

  item: {
    marginBottom: 16,
    maxWidth: 235,

    "& > div": {
      width: "100%",
    },
  },
}));

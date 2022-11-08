import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    imageList: {
      gridTemplateColumns: "repeat(5, 1fr) !important",
    },
    itemBar: {
      background: "#333 !important",
      padding: "5px 7px",
      marginTop: -10,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    },
    button: {
      fontWeight: "bold",
    },
  })
);

export default useStyles;

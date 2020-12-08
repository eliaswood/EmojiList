import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  menuItem: {
    height: 50,
	  display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
	  paddingLeft: "20px",
    paddingRight: "20px",
    marginBottom: 16,
    boxShadow: "none",
    border: "1px solid #c3c3c3"
  },
});

export default useStyles;

// material-ui
import { Grid, Box, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

// components
import ModalScore from "../Modal";
//-------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  alignEnd: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },
  alignCenter: {
    justifyContent: "center",
  },
  items: {
    padding: "0 10px",
  },
  text: {
    color: "#5777A8",
  },
}));

//-------------------------------------------------
const Student = ({ student }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Box className={classes.root}>
          <Box className={classes.items}>
            <Avatar src={student.image} alt={student.name} />
          </Box>
          <Box className={classes.items}>
            <Typography className={classes.text}>{student.name}</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box className={clsx(classes.root, classes.alignCenter)}>
          <Box className={classes.items}>
            <Typography className={classes.text}>{student.house}</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box className={clsx(classes.root, classes.alignEnd)}>
          <Box className={classes.items} alignSelf="flex-end">
            <ModalScore student={student} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Student;

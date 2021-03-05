// react
import { useState } from "react";
// material ui
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// react hook form
import { useForm, register } from "react-hook-form";
//-----------------------------------------------------

const getModalStyle = () => {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
};
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #3f51b6",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    minWidth: 250,
  },
}));
//----------------------------------------------------
const ScoreChange = ({ close, student }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  return (
    <div style={modalStyle} className={classes.paper}>
      Modal
    </div>
  );
};

export default ScoreChange;

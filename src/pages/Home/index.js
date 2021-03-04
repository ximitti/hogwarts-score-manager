// react
import { useState } from "react";

// material ui
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Collapse,
  IconButton,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
//----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    [theme.breakpoints.down("xs")]: {
      minWidth: 290,
      maxWidth: 600,
      width: "95%",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: 900,
      minWidth: 595,
      width: "95%",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

//----------------------------------------------------------------------
const Home = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="/images/hogwarts_w1.jpg"
        title="Hogwarts Houses"
      />
      <CardContent>
        <Typography variant="h6" my={1}>Hogwarts Score Manager</Typography>
      </CardContent>
      <CardActions>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            Bem vindos ao gerenciador de pontos de Hogwarts!
          </Typography>
          <Typography>Qual será a casa vencedora desse ano??</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Home;

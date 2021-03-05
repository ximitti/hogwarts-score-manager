// material ui
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// ----------------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 225,
    margin: 10,
    backgroundColor: "#E5EDF2",
  },
  media: {
    height: 250,
  },
  title: {
    color: "#5777A8",
  },
  avatar: {
    backgroundColor: "#5777A8",
    color: "#E5EDF2",
    paddingTop: "5px",
    borderRadius: "10px",
  },
}));

// ---------------------------------------------------------------------------
const ScoreCard = ({ house }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>{house.position}</Avatar>}
        title={
          <Typography className={classes.title} variant="h5">
            {house.name}
          </Typography>
        }
      />
      <CardMedia
        className={classes.media}
        image={house.image}
        alt={house.name}
      />
      <CardContent>
        <Typography className={classes.title} variant="h4">
          {house.score}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ScoreCard;

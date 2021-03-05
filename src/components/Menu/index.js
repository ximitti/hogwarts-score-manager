// material ui
import {
  Box,
  AppBar,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
  Divider,
  Avatar,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

// react router dom
import { useHistory } from "react-router-dom";

// react
import { useState } from "react";
//----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 25,
    width: "100%",
  },
  appBorder: {
    borderRadius: 0,
  },
}));
//----------------------------------------------------------------------
const MenuBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const sendTo = (path) => {
    handleClose();
    history.push(path);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.root}>
      <AppBar className={classes.appBorder} position="static">
        <Toolbar>
          <Box
            display="flex"
            alignItems="center"
            textAlign="left"
            flexGrow={1}
            fontSize={{ xs: "subtitle1.fontSize", sm: "h5.fontSize" }}
          >
            <Box mx={1.5}>
              <Avatar
                variant="square"
                alt="Hogwarts Shield"
                src="/images/logo_hogwarts.png"
              />
            </Box>
            <Box>
              <Typography variant="inherit">Hogwarts Score Manager</Typography>
            </Box>
          </Box>
          <Box
            display={{ xs: "block", sm: "none" }}
            maxWidth="300px"
            textAlign="right"
          >
            <IconButton>
              <MenuIcon
                aria-controls="menu"
                aria-haspopup="true"
                onClick={handleClick}
              />
            </IconButton>
            <Menu
              id="menu"
              keepMounted
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => sendTo("/")}>Home</MenuItem>
              <MenuItem onClick={() => sendTo("/board")}>Board</MenuItem>
            </Menu>
          </Box>
          <Box
            display={{ xs: "none", sm: "flex" }}
            justifyContent="flex-start"
            minWidth="165px"
          >
            <>
              <MenuItem onClick={() => sendTo("/")}>Home</MenuItem>
              <Divider orientation="vertical" flexItem />
              <MenuItem onClick={() => sendTo("/board")}>Board</MenuItem>
            </>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuBar;

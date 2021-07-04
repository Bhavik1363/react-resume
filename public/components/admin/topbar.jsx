/* eslint-disable no-empty */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable import/first */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/sort-comp */
/* eslint-disable no-alert */
/* eslint-disable prefer-destructuring */
/* eslint-disable */

import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Menu,
  MenuItem,
  Snackbar,
} from "@material-ui/core";

import MuiAlert from "@material-ui/lab/Alert";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import PersonIcon from "@material-ui/icons/Person";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HelpIcon from "@material-ui/icons/Help";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const TopBar = ({
  className,
  onMobileNavOpen,
  sideOptionSelected,
  ...rest
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClickhome = (event) => {
    window.location.href = "/";
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
        <Toolbar>
          <Box flexGrow={1} />
          <div className="centertitleadmin">
            <Hidden lgUp>
              <IconButton color="inherit" onClick={onMobileNavOpen}>
                <MenuIcon />
              </IconButton>
            </Hidden>
            <h1 className="mobilesize" style={{ fontFamily: "Sitka", fontWeight: "700" }}>
              ADMIN PANEL
            </h1>
          </div>
          {/* notifications */}
          <IconButton
            color="inherit"
            title="Go to Homepage"
            onClick={handleClickhome}
          >
            <HomeRoundedIcon
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClickhome}
            >
              Home
            </HomeRoundedIcon>
          </IconButton>

          {/* Profile menu */}
          <div>
            <IconButton
              color="inherit"
              onClick={handleClick}
              title="My Account"
            >
              <PersonIcon
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                Open Menu
              </PersonIcon>
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              style={{ top: "60px" }}
            >
              <MenuItem
                onClick={() => onLogout()}
                title="Sign out from Platform"
              >
                <IconButton color="inherit">
                  <InputIcon />
                </IconButton>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );

  function onLogout() {
    localStorage.clear();
    window.location.href = "/";
  }
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
  userId: PropTypes.string,
  isEcommarce: PropTypes.string,
};

export default TopBar;

/* eslint-disable */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */

import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PropTypes from "prop-types";
import EmojiPeopleOutlinedIcon from "@material-ui/icons/EmojiPeopleOutlined";
import LocalGroceryStoreOutlinedIcon from "@material-ui/icons/LocalGroceryStoreOutlined";
import {
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  makeStyles,
  Button,
  ListItem,
} from "@material-ui/core";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListIcon from "@material-ui/icons/List";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ContactsIcon from "@material-ui/icons/Contacts";
import FaceIcon from "@material-ui/icons/Face";
import BuildIcon from "@material-ui/icons/Build";
import TheatersOutlinedIcon from '@material-ui/icons/TheatersOutlined';
import ChromeReaderModeOutlinedIcon from '@material-ui/icons/ChromeReaderModeOutlined';
import SettingsIcon from "@material-ui/icons/Settings";
import clsx from "clsx";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import RecentActorsOutlinedIcon from "@material-ui/icons/RecentActorsOutlined";

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256,
  },
  heading: {
    fontSize: "1.1rem",
  },
  desktopDrawer: {
    width: 256,
    top: 81,
    height: "calc(100% - 81px)",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },

  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: "#000",
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: "flex-start",
    letterSpacing: 0,
    padding: "10px 8px",
    textTransform: "none",
    width: "100%",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  title: {
    marginRight: "auto",
    fontFamily: "Sitka",
    fontSize : "12px"
  },
  active: {
    color: theme.palette.primary.main,
    "& $title": {
      fontWeight: theme.typography.fontWeightMedium,
    },
    "& $icon": {
      color: theme.palette.primary.main,
    },
  },
}));

const Sidebar = ({
  className,
  onMobileClose,
  openMobile,
  sideOptionSelected,
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, []);
  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      {/* <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Logo profileImageUrl={profileImageUrl} /> need to add
      </Box>
      <Divider /> */}
      <Box p={2}>
        <List className="blackcolor">
          <ListItem className={clsx(classes.item, className)} disableGutters>
            <Button
              activeclassname={classes.active}
              className={classes.button}
              onClick={() => onClickDashboard("Dashboard")}
            >
              <DashboardOutlinedIcon className={classes.icon} size="20" />
              <span className={classes.title}>Dashboard</span>
            </Button>
          </ListItem>

          <Accordion style={{ border: "none", boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading} style={{ fontFamily: "Sitka" }}>ResumePage Component</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{width : "100%"}}>
                  <ListItem
                    className={clsx(classes.item, className)}
                    disableGutters
                  >
                    <Button
                      activeclassname={classes.active}
                      className={classes.button}
                      onClick={() => onClickDashboard("Introduction")}
                    >
                      <ChromeReaderModeOutlinedIcon className={classes.icon} size="20" />
                      <span className={classes.title}>Introduction</span>
                    </Button>
                  </ListItem>
                  <ListItem
                    className={clsx(classes.item, className)}
                    disableGutters
                  >
                    <Button
                      activeclassname={classes.active}
                      className={classes.button}
                      onClick={() => onClickDashboard("media")}
                    >
                      <TheatersOutlinedIcon className={classes.icon} size="20" />
                      <span className={classes.title}>Media</span>
                    </Button>
                  </ListItem>
                  <ListItem
                    className={clsx(classes.item, className)}
                    disableGutters
                  >
                    <Button
                      activeclassname={classes.active}
                      className={classes.button}
                      onClick={() => onClickDashboard("products")}
                    >
                      <LocalGroceryStoreOutlinedIcon
                        className={classes.icon}
                        size="20"
                      />
                      <span className={classes.title}>Ecommerce Products</span>
                    </Button>
                  </ListItem>
                    <ListItem
                      className={clsx(classes.item, className)}
                      disableGutters
                    >
                      <Button
                        activeclassname={classes.active}
                        className={classes.button}
                        onClick={() => onClickDashboard("Enquiry")}
                      >
                        <RecentActorsOutlinedIcon
                          className={classes.icon}
                          size="20"
                        />
                        <span className={classes.title}>Enquiry Details</span>
                      </Button>
                    </ListItem>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  function onClickDashboard(value) {
    sideOptionSelected(value);
    onMobileClose();
  }


  return (
    <div>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </div>
  );
};

Sidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

Sidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default Sidebar;

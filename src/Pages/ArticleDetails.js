import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Tabs, Grid } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid xs={6} lg={8}>
        <AppBar
          position="static"
          color="inherit"
          style={{
            boxShadow: "none",
            display: "flex",
            justifyContent: "space-around",
            marginTop: "10px",
            marginBottom: "10px"
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <img src="mission.png" style={{ width: "100px", height: "50px" }} />
            <Tab label="MISSION ORIGINALS" {...a11yProps(0)} />
            <Tab label="SUBSCRIBE" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        {/* <TabPanel value={value} index={0}></TabPanel>
        <TabPanel value={value} index={1}></TabPanel> */}
      </Grid>
    </div>
  );
}

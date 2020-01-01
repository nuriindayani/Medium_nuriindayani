import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Chart from "./Charts";
import TitleStats from "./TitleStats";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
      <TitleStats />
      <div style={{ width: "90%", margin: "auto" }}>
        <Typography
          variant="h4"
          style={{ textAlign: "left", marginBottom: "60px" }}
        >
          Stats
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Typography variant="subtitle2" style={{ color: "grey" }}>
            Click story below to view in Chart
          </Typography>
          <Typography variant="subtitle2" style={{ color: "grey" }}>
            Learn more about using stats
          </Typography>
        </div>
      </div>
      <hr />
      <AppBar position="static" color="inherit" style={{ boxShadow: "none" }}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            label="Views(30 Days)"
            icon={<Typography variant="h3">0</Typography>}
            {...a11yProps(0)}
          />
          <Tab
            label="Read(30 Days)"
            icon={<Typography variant="h3">0</Typography>}
            {...a11yProps(1)}
          />
          <Tab
            label="Fans(30 Days)"
            icon={<Typography variant="h3">0</Typography>}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {/* <Chart /> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Chart />
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <Chart /> */}
      </TabPanel>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          color: "grey"
        }}
      >
        <Typography>November 10</Typography>
        <Typography>November 17</Typography>
        <Typography>November 24</Typography>
        <Typography>December 7</Typography>
      </div>
      <div></div>
    </div>
  );
}

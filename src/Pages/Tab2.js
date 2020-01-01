import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Box, Button, Grid } from "@material-ui/core";
import TitleStory2 from "./TitleStory2";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
}));

export default function Tab2() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        margin: "auto",
        boxShadow: "none"
      }}
    >
      <TitleStory2 />
      <hr style={{ marginTop: "0px" }} />
      <div style={{ width: "98%", margin: "auto" }}>
        <Grid container style={{ marginTop: "15px" }}>
          <Grid item xs={6} md={8}>
            <h2>Your Stories</h2>
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Button
              variant="outlined"
              style={{ width: "180px", height: "40px" }}
            >
              Import a Story
            </Button>
            <Button
              variant="outlined"
              style={{ width: "180px", height: "40px" }}
            >
              Write a Story
            </Button>
          </Grid>
        </Grid>

        <AppBar position="static" color="inherit" style={{ boxShadow: "none" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="full width tabs example"
          >
            <Tab label="Drafts 1" {...a11yProps(0)} />
            <Tab label="Published" {...a11yProps(1)} />
          </Tabs>
        </AppBar>

        <TabPanel
          value={value}
          index={0}
          dir={theme.direction}
          style={{
            textAlign: "center",
            justifyContent: "center"
          }}
        >
          <Typography>You Have no Drafts</Typography>
          <Typography>Write on the go with our IOS and Android Apps</Typography>
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          dir={theme.direction}
          style={{
            textAlign: "center",
            justifyContent: "center"
          }}
        >
          <Typography>You Have no Published</Typography>
          <Typography>Write on the go with our IOS and Android Apps</Typography>
        </TabPanel>
      </div>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button, Typography } from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import TitleStats from "./TitleStats";

const useStyles = makeStyles(theme => ({
  root: {
    display: "",
    "& > *": {
      marginTop: "20px",
      marginLeft: "80px",
      // margin: theme.spacing(10),
      width: theme.spacing(100),
      height: theme.spacing(10)
    }
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div>
      <TitleStats />
      <div className={classes.root}>
        <Typography variant="h3" color="inherit">
          Bookmarks
        </Typography>
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "5px",
            display: "flex",
            alignItems: "center"
          }}
        >
          <div
            style={{
              width: "80px",
              borderRight: "1px solid #ccc",
              display: "flex",
              justifyContent: "center",
              marginRight: "20px"
            }}
          >
            <BookmarkIcon style={{ width: "50px", height: "50px" }} />
          </div>
          <div style={{ width: "570px" }}>
            <Typography variant="h3">offline reader file</Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end"
            }}
          >
            <Button
              size="medium"
              variant="contained"
              style={{ color: "#fff", backgroundColor: "#000" }}
            >
              Upgrade
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

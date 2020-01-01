import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Avatar, Box, Divider } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Comment from "./Comment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  style: { width: "5rem", height: "5rem" },
  borderColor: "text.primary"
};

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        xs={12}
        lg={12}
        style={{
          width: "50%",
          margin: "auto",
          display: "flex"
        }}
      >
        <Grid
          container
          spacing={2}
          xs={12}
          lg={12}
          style={{
            width: "80%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <Button
            variant="contained"
            default
            style={{ backgroundColor: "default", fontSize: "14px" }}
          >
            Books
          </Button>
          <Button
            variant="contained"
            default
            style={{ backgroundColor: "default", fontSize: "14px" }}
          >
            Self Improvement
          </Button>
          <Button
            variant="contained"
            default
            style={{ backgroundColor: "default", fontSize: "14px" }}
          >
            Productivity
          </Button>
          <Button
            variant="contained"
            default
            style={{ backgroundColor: "default", fontSize: "14px" }}
          >
            Life
          </Button>
          <Button
            variant="contained"
            default
            style={{ backgroundColor: "default", fontSize: "14px" }}
          >
            Life Lesson
          </Button>
        </Grid>
        <Grid
          container
          spacing={2}
          xs={8}
          lg={8}
          style={{
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            marginTop: "10px",
            justifyContent: "flex-start"
          }}
        >
          <Avatar
            alt="Nuri Indayani"
            src="claps.jpg"
            style={{
              width: "70px",
              height: "70px"
            }}
          />
          <h5>54K claps</h5>
        </Grid>

        <Grid
          container
          spacing={2}
          xs={12}
          lg={4}
          style={{
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            marginBottom: "25px",
            justifyContent: "space-around"
          }}
        >
          <TwitterIcon />
          <LinkedInIcon />
          <FacebookIcon />
          <BookmarkBorderIcon />
          <MoreHorizIcon />
        </Grid>
      </Grid>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={6}>
          <Divider style={{ marginBottom: "20px" }} />
          <Grid container spacing={4}>
            <Grid item xs={2}>
              <Avatar
                alt="Nuri Indayani"
                src="nuri.jpg"
                style={{
                  width: "80px",
                  height: "80px"
                }}
              />
            </Grid>
            <Grid
              item
              xs={8}
              style={{
                paddingTop: "0",
                display: "flex"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "Left",
                  flexDirection: "column"
                }}
              >
                <h4
                  style={{
                    color: "gray",
                    marginBottom: "0",
                    marginTop: "0",
                    textAlign: "left"
                  }}
                >
                  Written By
                </h4>
                <h3 style={{ marginTop: "0" }}>RYAN HOLIDAY</h3>
                {/* <h4 style={{ color: "gray", marginTop: "0" }}>
                  The excessive demands on her energy and time have sinister,
                  historical precedent Arielle Gray Dec 19 · 6 min read
                </h4> */}
                <p style={{ color: "gray", marginBottom: "0", marginTop: "0" }}>
                  The excessive demands on her energy and time have sinister,
                  historical precedent
                </p>
              </div>
            </Grid>
            <Grid item xs={2} style={{ justifyContent: "right" }}>
              <Button variant="outlined">Follow</Button>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <Grid item xs={6}>
          <Grid container spacing={4}>
            <Grid item xs={2}>
              <Avatar
                alt="Nuri Indayani"
                src="nuri.jpg"
                style={{
                  width: "80px",
                  height: "80px"
                }}
              />
            </Grid>
            <Grid
              item
              xs={8}
              style={{
                paddingTop: "0",
                display: "flex"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "Left",
                  flexDirection: "column"
                }}
              >
                <h4
                  style={{
                    color: "gray",
                    marginBottom: "0",
                    marginTop: "0",
                    textAlign: "left"
                  }}
                >
                  Written By
                </h4>
                <h3 style={{ marginTop: "0" }}>RYAN HOLIDAY</h3>
                {/* <h4 style={{ color: "gray", marginTop: "0" }}>
                  The excessive demands on her energy and time have sinister,
                  historical precedent Arielle Gray Dec 19 · 6 min read
                </h4> */}
                <p style={{ color: "gray", marginBottom: "0", marginTop: "0" }}>
                  The excessive demands on her energy and time have sinister,
                  historical precedent
                </p>
              </div>
            </Grid>
            <Grid item xs={2} style={{ justifyContent: "right" }}>
              <Button variant="outlined">Follow</Button>
            </Grid>
          </Grid>
          <Link to="/Comment">
            <Button
              variant="outlined"
              style={{ marginTop: "30px", width: "100%", color: "green" }}
            >
              See All Response (209)
            </Button>
          </Link>
          <hr />
        </Grid>
      </div>
    </div>
  );
}

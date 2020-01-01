import React, { Component } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import { MenuItem, Container, Grid, Avatar } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Favorite, Bookmark } from "@material-ui/icons";

class RelatedArticle extends Component {
  render() {
    return (
      <div>
        <Container>
          <Link style={{ textDecoration: "none", color: "black" }}>
            <h3>More From Medium</h3>
          </Link>
          <hr />
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <h3 style={{ color: "gray" }}>More From Mission.org</h3>
              <img
                src="art.jpg"
                style={{ width: "100%", height: "50%", margin: "auto" }}
              />
              <Typography
                variant="h5"
                color="textSecondary"
                style={{ justifyContent: "space-around" }}
              >
                The greates sales deck I've ever seen
              </Typography>
              <Grid container>
                <Grid
                  item
                  xs={2}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Avatar alt="Nuri Indayani" src="nuri.jpg" />
                </Grid>
                <Grid item xs={7}>
                  <Link to="/profile" style={{ textDecoration: "none" }}>
                    <Typography variant="body1" style={{ color: "black" }}>
                      Nuri indayani in Mission.org
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="textSecondary">
                    dec 21 | 12 min read
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <IconButton>
                    <Favorite />
                  </IconButton>
                  <IconButton>
                    <Bookmark />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
              <h3 style={{ color: "gray" }}>More From Mission.org</h3>
              <img
                src="art3.jpg"
                style={{ width: "100%", height: "50%", margin: "auto" }}
              />
              <Typography
                variant="h5"
                color="textSecondary"
                style={{ justifyContent: "space-around" }}
              >
                The greates sales deck I've ever seen
              </Typography>
              <Grid container>
                <Grid
                  item
                  xs={2}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Avatar alt="Nuri Indayani" src="nuri.jpg" />
                </Grid>
                <Grid item xs={7}>
                  <Link to="/profile" style={{ textDecoration: "none" }}>
                    <Typography variant="body1" style={{ color: "black" }}>
                      Nuri indayani in Mission.org
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="textSecondary">
                    dec 21 | 12 min read
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <IconButton>
                    <Favorite />
                  </IconButton>
                  <IconButton>
                    <Bookmark />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
              <h3 style={{ color: "gray" }}>More From Mission.org</h3>
              <img
                src="art2.jpg"
                style={{ width: "100%", height: "50%", margin: "auto" }}
              />
              <Typography
                variant="h5"
                color="textSecondary"
                style={{ justifyContent: "space-around" }}
              >
                The greates sales deck I've ever seen
              </Typography>
              <Grid container>
                <Grid
                  item
                  xs={2}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Avatar alt="Nuri Indayani" src="nuri.jpg" />
                </Grid>
                <Grid item xs={7}>
                  <Link to="/profile" style={{ textDecoration: "none" }}>
                    <Typography variant="body1" style={{ color: "black" }}>
                      Nuri indayani in Mission.org
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="textSecondary">
                    dec 21 | 12 min read
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <IconButton>
                    <Favorite />
                  </IconButton>
                  <IconButton>
                    <Bookmark />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <div style={{ backgroundColor: "black" }}>
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={12} spacing={3}>
                <Grid container>
                  <Grid item xs={4} style={{ color: "gray" }}>
                    <Typography variant="h6">Discover Medium</Typography>
                    <Typography variant="subtitle2">
                      I may not have gone where I intended to go, but I think I
                      have ended up where I needed to be. Douglas Adams
                    </Typography>
                  </Grid>

                  <Grid item xs={4} style={{ color: "gray" }}>
                    <Typography variant="h6">Discover Medium</Typography>
                    <Typography variant="subtitle2">
                      I may not have gone where I intended to go, but I think I
                      have ended up where I needed to be. Douglas Adams
                    </Typography>
                  </Grid>

                  <Grid item xs={4} style={{ color: "gray" }}>
                    <Typography variant="h6">Discover Medium</Typography>
                    <Typography variant="subtitle2">
                      I may not have gone where I intended to go, but I think I
                      have ended up where I needed to be. Douglas Adams
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <hr />
            <Grid container>
              <Grid item xs={9}>
                <Typography variant="h3" style={{ color: "gray" }}>
                  Medium
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <Typography variant="subtitle2" style={{ color: "gray" }}>
                  About
                </Typography>
                <Typography variant="subtitle2" style={{ color: "gray" }}>
                  Help
                </Typography>
                <Typography variant="subtitle2" style={{ color: "gray" }}>
                  Legal
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}

export default RelatedArticle;

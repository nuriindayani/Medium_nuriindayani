import React, { Component } from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularArticle: [
        {
          image:
            "https://cdns.klimg.com/merdeka.com/i/w/news/2019/05/07/1078055/670x335/dorong-program-reforma-agraria-978000-hektare-lahan-hutan-siap-diberikan-ke-rakyat.jpg",
          title:
            "Get ready to step outside of your comfort zone with wallpaper that can give your space an attractive new look.",
          author: "Nuri Indayani",
          dateCreated: "Dec 7 | 16 minutes read"
        },
        {
          image:
            "https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg",
          title: "Forest in the world",
          author: "Steve",
          dateCreated: "Nov 19 | 26 minutes read"
        },
        {
          image:
            "https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567_1280.jpg",
          title: "Venture Capital Needs a Reality Check",
          author: "Robert",
          dateCreated: "Apr 1 | 19 minutes read"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Grid container spacing={4} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/article" style={{ textDecoration: "none" }}>
              <div>
                <div className="popular-img"></div>
                <Grid
                  container
                  spacing={2}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Grid item xs={12} md={11}>
                    <div style={{ paddingTop: 10 }}>
                      <Typography
                        variant="subtitle1"
                        component="p"
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: "bold",
                          color: "#000",
                          lineHeight: "20px",
                          marginBottom: 15
                        }}
                      >
                        The Cold Dark Truth in the ‘Afghanistan Papers’: America
                        Doesn’t Care About Losing
                      </Typography>
                      <Typography
                        variant="caption"
                        component="p"
                        style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                        color="textSecondary"
                      >
                        Never-ending defeat is preferable to U.S. leadership and
                        invisible to everyone at home
                      </Typography>
                      <Link
                        to="/articlePerson"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          variant="subtitle1"
                          component="p"
                          style={{
                            fontFamily: "Gupter",
                            color: "#000",
                            marginTop: 15,
                            fontWeight: "bold"
                          }}
                        >
                          Riana
                        </Typography>
                      </Link>
                      <Typography
                        variant="caption"
                        component="p"
                        style={{ fontFamily: "Poppins", color: "#000" }}
                      >
                        Jan 23 | 21 minutes read
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {this.state.popularArticle.map(lists => (
              <Link to="/article" style={{ textDecoration: "none" }}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <div
                      className="popular-img-1"
                      style={{ backgroundImage: `url(${lists.image})` }}
                    ></div>

                    {/* <div className="popular-img-1">
                      <img src={lists.image} />
                    </div> */}
                  </Grid>
                  <Grid item xs={9}>
                    <Typography
                      variant="subtitle2"
                      component="p"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        color: "#000",
                        lineHeight: "20px",
                        marginBottom: 15
                      }}
                    >
                      {lists.title}
                    </Typography>
                    <Link
                      to="/articlePerson"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        variant="subtitle1"
                        component="p"
                        style={{
                          fontFamily: "Gupter",
                          color: "#000",
                          marginTop: 15
                        }}
                      >
                        {lists.author}
                      </Typography>
                    </Link>
                    <Typography
                      variant="caption"
                      component="p"
                      style={{ fontFamily: "Poppins", color: "#000" }}
                    >
                      {lists.dateCreated}
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Link to="/article" style={{ textDecoration: "none" }}>
              <div className="popular-article">
                <div className="popular-img"></div>
                <Grid
                  container
                  spacing={2}
                  style={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Grid item xs={12} md={11}>
                    <div style={{ paddingTop: 10 }}>
                      <Typography
                        variant="subtitle1"
                        component="p"
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: "bold",
                          color: "#000",
                          lineHeight: "20px",
                          marginBottom: 15
                        }}
                      >
                        What the Fight for Hong Kong Is Really About
                      </Typography>
                      <Typography
                        variant="caption"
                        component="p"
                        style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                        color="textSecondary"
                      >
                        Writer and activist Wilfred Chan on what the movement
                        teaches us about authoritarianism, nationality, and
                        liberation
                      </Typography>
                      <Link
                        to="/articlePerson"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          variant="subtitle1"
                          component="p"
                          style={{
                            fontFamily: "Gupter",
                            color: "#000",
                            marginTop: 15,
                            fontWeight: "bold"
                          }}
                        >
                          Alex F.
                        </Typography>
                      </Link>
                      <Typography
                        variant="caption"
                        component="p"
                        style={{ fontFamily: "Poppins", color: "#000" }}
                      >
                        Oct 12 | 16 minutes read
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Feature;

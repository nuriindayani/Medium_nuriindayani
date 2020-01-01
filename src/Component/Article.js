import React, { Component } from "react";
import {
  Paper,
  CardMedia,
  Typography,
  IconButton,
  Grid,
  Button
} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Bookmark, BookmarkBorderOutlined } from "@material-ui/icons";
// import "../App.css";
class Article extends Component {
  render() {
    const listPopular = [
      {
        image:
          "https://fsa.zobj.net/crop.php?r=vTKEedr8jd5g6wzMsbX7sBxjZQtQ9i0Mxr0kxUhd8n5jg-hpC2z63E_1w2WNYz0Nsau2Cbg9ho_nvbl51pOUhBW_AZUVHXckKRnCaSDOYXsxjUQKf9_6mXIHuF-3TCJ0M57QXmzxqlJLXfR3",
        title:
          "The Away Luggage Saga Shows Venture Capital Needs a Reality Check",
        content:
          "With Google’s founders withdrawing from management duties, here’s how the partnership that would organize the world’s information began",
        author: "Irish",
        dateCreated: "Oct 23 | 9 minutes read"
      },
      {
        image:
          "https://fsa.zobj.net/crop.php?r=kGJOGrY5TehDE7iRwHRo9Y3jUWXFikFpmzpprG0PZM42ydLWuSTx98-2WpqLX9LjS7m4n9HVuzzO5Ns9bTx-4vV3Ry_JShcLXBtbwp0_aG6AtYCL2eClGCY9mL9HFZfnYcJl2q1JSbYPjOrR",
        title: "The Away Luggage Saga Shows",
        content: "With Google’s founders withdrawing from management duties",
        author: "Frank",
        dateCreated: "Nov 19 | 26 minutes read"
      },
      {
        image:
          "https://fsa.zobj.net/crop.php?r=2RkuItuBunfuoeD9LptIEEB8a00-VD5sOAYxy6sUJef7Z-1UNIsSRak8PEzAYfIqu_-AQXwnEhVBCgWfzSukqaMiFUEDGFz0T0igcCKbbJYXk0VieSWSjQqKTmh8kTT7ogQ4LeC75yI_mcVB",
        title: "Venture Capital Needs a Reality Check",
        content:
          "From management duties, here’s how the partnership that would organize the world’s information began",
        author: "Lisa",
        dateCreated: "Apr 1 | 19 minutes read"
      }
    ];
    return (
      <div>
        {listPopular.map(popular => (
          <Grid container spacing={4}>
            <Grid item xs={9}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                BASED ON YOUR READING HISTORY
              </Typography>
              <Link to="/article" style={{ textDecoration: "none" }}>
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
                  {popular.title}
                </Typography>
                <Typography
                  variant="caption"
                  component="p"
                  style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                  color="textSecondary"
                >
                  {popular.content}
                </Typography>
              </Link>
              <Grid container spacing={2}>
                <Grid item xs={9}>
                  <Link to="/articlePerson" style={{ textDecoration: "none" }}>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      style={{
                        fontFamily: "Gupter",
                        color: "#000",
                        marginTop: 10,
                        fontWeight: "bold"
                      }}
                    >
                      {popular.author}
                    </Typography>
                  </Link>
                  <Typography
                    variant="caption"
                    component="p"
                    style={{ fontFamily: "Poppins", color: "#000" }}
                  >
                    {popular.dateCreated}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  {/* Icon */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <div
                className="popular-img-2"
                style={{ backgroundImage: `url(${popular.image})` }}
              ></div>
            </Grid>
          </Grid>
        ))}
      </div>
    );
  }
}

export default Article;

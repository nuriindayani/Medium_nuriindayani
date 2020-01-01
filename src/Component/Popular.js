import React, { Component } from "react";
import { Divider, Typography, Paper, CardMedia, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    axios.get(`http://localhost:7000/api/v1/articles`).then(res => {
      const articles = res.data;
      console.log(res.data);
      this.setState({ articles });
    });
  }

  render() {
    const Popular = [
      {
        no: "01",
        title:
          "A Nude Playboy Photos has been a Mainstay in Testing Teach for Decades",
        author: "Noor Rachman",
        dateCreated: "March 3 | 9 minutes read"
      },
      {
        no: "02",
        title: "Something Wrong",
        author: "Nooril",
        dateCreated: "Nov 17 | 30 minutes read"
      },
      {
        no: "03",
        title: "Franch is Favorite Country",
        author: "Robert",
        dateCreated: "Feb 23 | 32 minutes read"
      }
    ];
    return (
      <div>
        <Typography
          variant="h5"
          component="p"
          className="p-3"
          style={{ fontFamily: "Frank Ruhl Libre" }}
        >
          Popular on medium
        </Typography>
        <Divider style={{ marginBottom: 20 }} />
        {Popular.map(populars => (
          <Link to="/article" style={{ textDecoration: "none" }}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Typography
                  variant="h4"
                  component="p"
                  color="textSecondary"
                  style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                >
                  {populars.no}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="subtitle2"
                  component="p"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    color: "#000",
                    lineHeight: "20px",
                    marginBottom: 5
                  }}
                >
                  {populars.title}
                </Typography>
                <Link to="/articlePerson" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="caption"
                    component="p"
                    style={{
                      fontFamily: "Poppins",
                      color: "#000",
                      marginTop: 5
                    }}
                  >
                    {populars.author}
                  </Typography>
                </Link>
                <Typography
                  variant="caption"
                  component="p"
                  style={{ fontFamily: "Poppins", color: "#000" }}
                >
                  {populars.dateCreated}
                </Typography>
              </Grid>
            </Grid>
          </Link>
        ))}
        <Divider style={{ marginTop: 70, marginBottom: 10 }} />
        {/* Menu */}
      </div>
    );
  }
}
function Lists() {
  return <div></div>;
}

export default Popular;

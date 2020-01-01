import React, { Component } from "react";
import {
  Typography,
  Grid,
  Paper,
  Avatar,
  TextField,
  Button
} from "@material-ui/core";
import Links from "@material-ui/core/Link";
import CommentIcon from "@material-ui/icons/Comment";
import { Link } from "react-router-dom";
import { Favorite, ExpandMore, BookOutlined } from "@material-ui/icons";
import TitleStats from "./TitleStats";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: "",
      data: []
    };
  }

  onChange = event => {
    this.setState({ add: event.target.value });
  };
  onSubmit = event => {
    this.setState({
      add: "",
      data: [...this.state.data, this.state.add]
    });
  };
  addData = event => {
    if (event.keyCode == 13) {
      if (document.getElementById("outlined-textarea").value !== "") {
        this.onSubmit();
        document.getElementById("outlined-textarea").value = "";
      }
    }
  };
  render() {
    return (
      <div className="bg-comment">
        <TitleStats />
        <div
          style={{
            backgroundColor: "#fff",
            marginTop: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "180px"
          }}
        >
          <Grid item xs={11} md={6}>
            <Typography
              variant="caption"
              component="p"
              style={{
                fontWeight: "bold",
                fontFamily: "Poppins",
                marginBottom: 10,
                fontSize: "16px"
              }}
            >
              Showing responses for:
            </Typography>
            <Link to="/article" style={{ textDecoration: "none" }}>
              <div
                style={{
                  padding: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "5px"
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={10}>
                    <Typography
                      variant="subtitle2"
                      component="p"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        color: "#000",
                        fontSize: "14px"
                      }}
                    >
                      Progressive Web Apps with PokeAPI and Deploy using
                      Firebase
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      component="p"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Nuri Indayani
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center"
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      component="p"
                      style={{ fontFamily: "Poppins" }}
                    >
                      <CommentIcon />6
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Link>
          </Grid>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20
          }}
        >
          <Grid item xs={11} md={6} style={{ marginBottom: 30 }}>
            <Typography
              variant="caption"
              component="p"
              style={{
                fontWeight: "bold",
                fontFamily: "Poppins",
                fontSize: "16px"
              }}
            >
              Responses
            </Typography>
            <div
              style={{
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "#fff"
              }}
            >
              <Grid container>
                <Grid
                  item
                  xs={1}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Avatar alt="Nooril" src="imut.jpg" />
                </Grid>
                <Grid item xs={11}>
                  <from onSubmit={this.onSubmit}>
                    <TextField
                      name="comment"
                      id="outlined-textarea"
                      label="Write a response"
                      placeholder="Write a response"
                      multiline
                      variant="outlined"
                      fullWidth={true}
                      value={this.state.add}
                      onChange={this.onChange}
                      onKeyUp={this.addData}
                    />
                  </from>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </div>
        {this.state.data.map((item, index) => (
          <div
            style={{
              marginTop: "30px",
              marginBottom: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Grid item xs={11} md={6}>
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "20px",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  marginBottom: 40
                }}
              >
                <Typography
                  variant="body2"
                  component="p"
                  color="textSecondary"
                  style={{
                    fontFamily: "Poppins",
                    marginBottom: 20
                  }}
                >
                  Applause from Ardhan (author)
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginBottom: 20
                  }}
                >
                  <Avatar style={{ marginRight: 10 }}>AR</Avatar>
                  <div>
                    <Link
                      to="/profile"
                      style={{
                        fontFamily: "Roboto Condensed",
                        color: "#000",
                        textDecoration: "none",
                        fontSize: 16,
                        color: "#03a87c"
                      }}
                    >
                      Ardhan
                    </Link>
                    <Typography
                      variant="caption"
                      component="p"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Feb 17, 2019
                    </Typography>
                  </div>
                </div>
                <Link to="/comment" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="body1"
                    component="p"
                    style={{ fontFamily: "Frank Ruhl Libre", color: "#000" }}
                  >
                    {item}
                  </Typography>
                </Link>
                <Links href="/comment" color="inherit">
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    component="p"
                    style={{ fontFamily: "Gupter", marginTop: 10 }}
                  >
                    Read More..
                  </Typography>
                </Links>
                <Grid container style={{ marginTop: 20 }}>
                  <Grid item xs={2}>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                      component="p"
                    >
                      <Links href="#" color="inherit">
                        <Favorite /> 20K
                      </Links>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={10}
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Link
                      to="/comment"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none"
                      }}
                    >
                      <Typography
                        variant="caption"
                        component="p"
                        color="textSecondary"
                      >
                        2 Response
                      </Typography>
                      <Typography
                        variant="caption"
                        component="p"
                        color="textSecondary"
                        style={{ margin: "0 5px" }}
                      >
                        <BookOutlined />
                      </Typography>
                      <Typography
                        variant="caption"
                        component="p"
                        color="textSecondary"
                      >
                        <ExpandMore color="inherit" />
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </div>
        ))}
      </div>
    );
  }
}

export default Comment;

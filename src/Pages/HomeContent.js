import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { List, ListItem, ListItemText } from "@material-ui/core";
import TitleStats from "./TitleStats";
import Category from "../Component/Category";
import Popular from "../Component/Popular";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default class HomeContent extends React.Component {
  state = {
    categories: []
  };

  componentDidMount() {
    axios
      .get(`http://localhost:7000/api/v1/categories`)
      .then(res => {
        const persons = res.data;
        console.log(persons);
        this.setState({ categories: persons });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get(`http://localhost:7000/api/v1/articles`)
      .then(resa => {
        console.log(resa.da);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <TitleStats />
        <Category data={this.state.categories} />
        <Grid
          container
          spacing={3}
          style={{
            width: "90%",
            margin: "auto"
          }}
        >
          <Grid item xs={6} lg={4}>
            <div>
              <img
                src="meteor.jpg"
                width="400px"
                height="auto"
                style={{ marginLeft: "-30px" }}
              ></img>
            </div>

            <Typography variant="display1" component="h3" gutterBottom>
              Jatuhnya Meteor di atas Langit Laut Bering, Kekuatannya Mencapai
              10 Kali Bom Hiroshima
            </Typography>
            <div />
            <Typography
              variant="display4"
              style={{ color: "gray" }}
              gutterBottom
            >
              SERAMBINEWS.COM - 18 Desember tahun lalu, sebuah meteor meledak di
              atas langit Laut Bering yang terletak di antara Rusia dan Alaska,
              AS.
            </Typography>
            <br />
            <div />
            <Typography variant="body1" style={{ color: "gray" }} gutterBottom>
              Joni Beken
            </Typography>
            <Typography variant="body2" style={{ color: "gray" }} gutterBottom>
              Juli 12 | 5 min read
            </Typography>
          </Grid>

          <Grid
            item
            xs={6}
            lg={4}
            style={{
              display: "flex",
              flexDirection: "column",
              height: "220px"
            }}
          >
            <Grid
              item
              xs={6}
              lg={12}
              style={{
                display: "flex",
                flexDirection: "row"
              }}
            >
              <Grid item xs={6} lg={4}>
                <img src="sby.jpeg" width="100px" height="100px" />
              </Grid>
              <Grid item xs={6} lg={8}>
                <Typography variant="subtitle2" style={{ color: "black" }}>
                  Susilo Bambang Yudhoyono menyampaikan pidato politik refleksi
                  akhir tahun 2019.
                </Typography>
                <div />
                <Typography
                  variant="body2"
                  style={{ color: "gray" }}
                  gutterBottom
                >
                  Juli 12 | 5 min read
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={6}
              lg={12}
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "15px"
              }}
            >
              <Grid item xs={6} lg={4}>
                <img src="pusat.jpg" width="100px" height="100px" />
              </Grid>
              <Grid item xs={6} lg={8}>
                <Typography
                  variant="subtitle2"
                  style={{ color: "black" }}
                  gutterBottom
                >
                  BBIHP Samakan Persepsi Pemerintah Pusat dan Daerah Soal Kopi
                  di Sulsel Artikel ini telah tayang di tribun-timur.com
                </Typography>
                <div />
                <Typography
                  variant="body2"
                  style={{ color: "gray" }}
                  gutterBottom
                >
                  Juli 12 | 5 min read
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={6}
              lg={12}
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "15px"
              }}
            >
              <Grid item xs={6} lg={4}>
                <img src="olahraga.jpg" width="100px" height="100px" />
              </Grid>
              <Grid item xs={6} lg={8}>
                <Typography
                  variant="subtitle2"
                  style={{ color: "black" }}
                  gutterBottom
                >
                  MUTINLUPA – Pelatih ganda putra Pelatnas PBSI, Herry Iman
                  Pierngadi atau yang akrab disapa Herry IP, mengevaluasi
                  penampilan Fajar Alfian/Muhammad Rian Ardianto di SEA Games
                  2019.
                </Typography>
                <div />
                <Typography
                  variant="body2"
                  style={{ color: "gray" }}
                  gutterBottom
                >
                  Juli 12 | 5 min read
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} lg={4}>
            <Grid
              item
              xs={6}
              lg={12}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div>
                <img
                  src="laut.jpg"
                  width="400px"
                  height="auto"
                  style={{ marginLeft: "0px" }}
                ></img>
              </div>

              <Typography variant="display1" component="h3" gutterBottom>
                Jatuhnya Meteor di atas Langit Laut Bering, Kekuatannya Mencapai
                10 Kali Bom Hiroshima
              </Typography>
              <div />
              <Typography
                variant="display4"
                style={{ color: "gray" }}
                gutterBottom
              >
                SERAMBINEWS.COM - 18 Desember tahun lalu, sebuah meteor meledak
                di atas langit Laut Bering yang terletak di antara Rusia dan
                Alaska, AS.
              </Typography>
              <br />
              <div />
              <Typography
                variant="body1"
                style={{ color: "gray" }}
                gutterBottom
              >
                Joni Beken
              </Typography>
              <Typography
                variant="body2"
                style={{ color: "gray" }}
                gutterBottom
              >
                Juli 12 | 5 min read
              </Typography>
            </Grid>

            <Link style={{ display: "flex", justifyContent: "flex-end" }}>
              SEE ALL FEATURED >
            </Link>
          </Grid>
        </Grid>
        <hr />

        <Grid
          item
          xs={12}
          lg={12}
          style={{
            display: "flex",
            flexDirection: "row",
            width: "70%",
            margin: "auto"
          }}
          spacing={3}
        >
          <Grid
            item
            xs={6}
            lg={8}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              margin: "auto"
            }}
            spacing={3}
          >
            <Grid
              item
              xs={6}
              lg={12}
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "15px"
              }}
            >
              <Grid item xs={6} lg={8}>
                <Typography
                  variant="subtitle2"
                  style={{ color: "black" }}
                  gutterBottom
                >
                  MUTINLUPA – Pelatih ganda putra Pelatnas PBSI, Herry Iman
                  Pierngadi atau yang akrab disapa Herry IP, mengevaluasi
                  penampilan Fajar Alfian/Muhammad Rian Ardianto di SEA Games
                  2019.
                </Typography>
                <div />
                <Typography
                  variant="body2"
                  style={{ color: "gray" }}
                  gutterBottom
                >
                  Juli 12 | 5 min read
                </Typography>
              </Grid>
              <Grid item xs={6} lg={4}>
                <img src="olahraga.jpg" width="160px" height="160px" />
              </Grid>
            </Grid>

            <Grid
              item
              xs={6}
              lg={12}
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "15px"
              }}
            >
              <Grid item xs={6} lg={8}>
                <Typography
                  variant="subtitle2"
                  style={{ color: "black" }}
                  gutterBottom
                >
                  MUTINLUPA – Pelatih ganda putra Pelatnas PBSI, Herry Iman
                  Pierngadi atau yang akrab disapa Herry IP, mengevaluasi
                  penampilan Fajar Alfian/Muhammad Rian Ardianto di SEA Games
                  2019.
                </Typography>
                <div />
                <Typography
                  variant="body2"
                  style={{ color: "gray" }}
                  gutterBottom
                >
                  Juli 12 | 5 min read
                </Typography>
              </Grid>
              <Grid item xs={6} lg={4}>
                <img src="olahraga.jpg" width="160px" height="160px" />
              </Grid>
            </Grid>

            <Grid
              item
              xs={6}
              lg={12}
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "15px"
              }}
            >
              <Grid item xs={6} lg={8}>
                <Typography
                  variant="subtitle2"
                  style={{ color: "black" }}
                  gutterBottom
                >
                  MUTINLUPA – Pelatih ganda putra Pelatnas PBSI, Herry Iman
                  Pierngadi atau yang akrab disapa Herry IP, mengevaluasi
                  penampilan Fajar Alfian/Muhammad Rian Ardianto di SEA Games
                  2019.
                </Typography>
                <div />
                <Typography
                  variant="body2"
                  style={{ color: "gray" }}
                  gutterBottom
                >
                  Juli 12 | 5 min read
                </Typography>
              </Grid>
              <Grid item xs={6} lg={4}>
                <img src="olahraga.jpg" width="160px" height="160px" />
              </Grid>
            </Grid>

            <Grid
              item
              xs={6}
              lg={12}
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "15px"
              }}
            >
              <Grid item xs={6} lg={8}>
                <Typography
                  variant="subtitle2"
                  style={{ color: "black" }}
                  gutterBottom
                >
                  MUTINLUPA – Pelatih ganda putra Pelatnas PBSI, Herry Iman
                  Pierngadi atau yang akrab disapa Herry IP, mengevaluasi
                  penampilan Fajar Alfian/Muhammad Rian Ardianto di SEA Games
                  2019.
                </Typography>
                <div />
                <Typography
                  variant="body2"
                  style={{ color: "gray" }}
                  gutterBottom
                >
                  Juli 12 | 5 min read
                </Typography>
              </Grid>
              <Grid item xs={6} lg={4}>
                <img src="olahraga.jpg" width="160px" height="160px" />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            lg={4}
            style={{ display: "flex", flexDirection: "row", marginTop: "15px" }}
          >
            <Popular />
          </Grid>
        </Grid>
      </div>
    );
  }
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TitleStats from "./TitleStats";
import "./CategoryPage.css";
import { Paper, Grid, Container, Button } from "@material-ui/core";

const style2 = {
  float: "left",
  fontSize: "12px",
  textAlign: "left",
  width: "250px",
  height: "175px",
  marginLeft: "-20%",
  marginBottom: "0.5em"
};

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

export default function CategoryPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TitleStats />

      <Container style={{ width: "85%", margin: "auto" }}>
        <div className="container">
          <Grid
            container
            spacing={3}
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItem: "center"
            }}
          >
            <Grid item xs={3} md={3}>
              <img src="zero.png" width="250px" height="200px"></img>
            </Grid>
            <Grid item xs={4} md={6} style={{ paddingTop: "30px" }}>
              <h3>
                The front lines of the future. A Medium publication about tech
                and science.
              </h3>
            </Grid>
            <Grid
              item
              xs={3}
              md={3}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItem: "center"
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                size="small"
                style={{
                  border: "1px solid",
                  width: "100px",
                  heigth: "40px",
                  position: "absolute",
                  Top: "20px",
                  marginTop: "40px"
                }}
              >
                Follow
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={0} className="bc">
            <Grid item xs={8} lg={7}>
              <img src="oner.jpeg" width="100%" height="260px"></img>
            </Grid>
            <Grid
              item
              xs={4}
              lg={5}
              style={{
                backgroundColor: "green",
                display: "flex",
                justifyContent: "center",
                align: "center"
              }}
            >
              <center>
                <h4>
                  <b>The Influencer and The Hit Man</b>
                </h4>
                <h5>
                  How a years long domain name feud ended in a bloody shootout
                </h5>
                <h6 className="kuning">Ian Frisch</h6>
                <h6>Dec 10 . 26 min read</h6>
              </center>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={0}
            className="bca"
            style={{ marginTop: "30px" }}
          >
            <Grid item xs={5}>
              <img src="zeroz.jpeg" width="100%" height="100%px"></img>
            </Grid>
            <Grid
              item
              xs={7}
              style={{
                backgroundColor: "blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <center>
                <h4>
                  <b>The Influencer and The Hit Man</b>
                </h4>
                <h5>
                  How a years long domain name feud ended in a bloody shootout
                </h5>
                <h6 className="kuning">Ian Frisch</h6>
                <h6>Dec 10 . 26 min read</h6>
              </center>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={0}
            className="bc"
            style={{ marginTop: "30px" }}
          >
            <Grid item xs={8}>
              <img src="oze.jpg" width="100%" height="260px"></img>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                backgroundColor: "orange",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <center>
                <h4>
                  <b>The Influencer and The Hit Man</b>
                </h4>
                <h5>
                  How a years long domain name feud ended in a bloody shootout
                </h5>
                <h6 className="kuning">Ian Frisch</h6>
                <h6>Dec 10 . 26 min read</h6>
              </center>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            className="quotes"
            style={{
              marginTop: "30px",
              color: "black",
              fontSize: "30px",
              fontFamily: "cursive"
            }}
          >
            <h5
              className="quotes1"
              style={{ fontFamily: "arial", paddingTop: "20px" }}
            >
              The biggest men and women with the biggest ideas can be shot down
              by the smallest men and women with the smallest minds. Think big
              anyway.
            </h5>
            <br />
            <h6>
              People really need help but may attack you if you do help them.
              Help people anyway.
            </h6>
            <br />
          </Grid>

          <Grid
            container
            lg={12}
            style={{ display: "flex", alignItem: "center", padding: "50px" }}
          >
            <center>
              <Grid container style={{ marginTop: "30px" }}>
                <Grid
                  item
                  className="OuterGrid"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingLeft: "100px",
                    paddingRight: "100px",
                    fontSize: "12px",
                    marginBottom: "20px"
                  }}
                >
                  <Grid item xs={12}>
                    <div className="prg8">
                      <b>
                        <div className="prgg">Hutan Pelindung Bumi</div>
                      </b>
                      Hutan adalah sebuah kawasan yang ditumbuhi dengan lebat
                      oleh pepohonan dan tumbuhan lainnya. Kawasan-kawasan
                      semacam ini terdapat di wilayah-wilayah yang luas di dunia
                      dan berfungsi sebagai penampung karbon dioksida (carbon
                      dioxide sink), habitat hewan, modulator arus hidrologika,
                      serta pelestari tanah, dan merupakan salah satu aspek
                      biosfer Bumi yang paling penting.
                    </div>
                  </Grid>
                  <Grid item xs={6} className="PostImage">
                    <a href="" className="icons">
                      <img src="https://ucarecdn.com/182bd14b-648e-478f-a4dc-b885a489a543/-/crop/3456x3456/864,0/-/resize/500x500/" />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </center>
            <hr />
            <center>
              <Grid container>
                <Grid item className="OuterGrid">
                  <Grid item xs={12}>
                    <div className="prg8">
                      <b>
                        <div className="prgg">Sunset Pantai</div>
                      </b>
                      Matahari terbenam atau swastamita adalah waktu di mana
                      matahari menghilang di bawah garis cakrawala di sebelah
                      barat. Warna merah di langit pada waktu Matahari terbenam
                      dan terbit disebabkan oleh kombinasi hamburan Rayleigh
                      warna biru dan tingkat kepadatan atmosfer bumi.
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    className="PostImage"
                    width="100px"
                    height="100px"
                  >
                    <a href="" className="icons">
                      <img src="sunset.jpg" />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </center>
            <hr />
            <center>
              <Grid container>
                <Grid item className="OuterGrid">
                  <Grid item xs={12}>
                    <div className="prg8">
                      <b>
                        <div className="prgg">Laut Indonesia</div>
                      </b>
                      Laut adalah sebuah tubuh air asin besar yang dikelilingi
                      secara menyeluruh atau sebagian oleh daratan.[1][2][a]
                      Dalam arti yang lebih luas, "laut" adalah sistem perairan
                      samudra berair asin yang saling terhubung di Bumi yang
                      dianggap sebagai satu samudra global atau sebagai beberapa
                      samudra utama. Laut mempengaruhi iklim Bumi dan memiliki
                      peran penting dalam siklus air, siklus karbon, dan siklus
                      nitrogen.
                    </div>
                  </Grid>
                  <Grid item xs={6} className="PostImage">
                    <a href="" className="icons">
                      <img src="laut.jpg" />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </center>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

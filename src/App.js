import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@material-ui/core";
import "@material-ui/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import TitleHome from "./Pages/TitleHome";
import Popular from "./Component/Popular";
import Pop from "./Component/Pop";
import HomeContent from "./Pages/HomeContent";
import CategoryPage from "./Pages/CategoryPage";
import ConArticleDetails from "./Pages/ConArticleDetails";
import Category from "./Component/Category";
import Follow from "./Pages/Follow";
import Comment from "./Pages/Comment";
import RelatedArticle from "./Pages/RelatedArticle";
import Story from "./Pages/Story";
import ArticleDetails from "./Pages/ArticleDetails";
import TitleStory from "./Pages/TitleStory";
import Stats from "./Pages/Stats";
import TitleStats from "./Pages/TitleStats";
import TitleStory2 from "./Pages/TitleStory2";
import Charts from "./Pages/Charts";
import Profile from "./Pages/Profile";
import Tab2 from "./Pages/Tab2";
import Bookmark from "./Pages/Bookmark";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/titlehome">
            <TitleHome />
          </Route>
          <Route path="/story">
            <Story />
          </Route>
          <Route path="/categorypage">
            <CategoryPage />
          </Route>
          <Route path="/homecontent">
            <HomeContent />
          </Route>
          <Route path="/titlestory">
            <TitleStory />
          </Route>
          <Route path="/titlestats">
            <TitleStats />
          </Route>
          <Route path="/titlestory2">
            <TitleStory2 />
          </Route>
          <Route path="/charts">
            <Charts />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/category/:id">
            <Category />
          </Route>
          <Route path="/popular">
            <Popular />
          </Route>
          <Route path="/pop">
            <Pop />
          </Route>
          <Route path="/comment">
            <Comment />
          </Route>
          <Route path="/Stats">
            <Stats />
          </Route>
          <Route path="/articledetails">
            <ArticleDetails />
          </Route>
          <Route path="/conarticledetails">
            <ConArticleDetails />
          </Route>
          <Route path="/relatedarticle">
            <RelatedArticle />
          </Route>
          <Route path="/follow">
            <Follow />
          </Route>

          <Route path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/bookmark">
            <Bookmark />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <HomeContent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

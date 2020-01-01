import React, { Component, useState, useEffect } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Button } from "@material-ui/core";
import "./Category.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
// list of items
const list = [
  // { name: "HOME", target: "/category" },
  // { name: "ONEZERO", target: "/category" },
  // { name: "ELEMENTAL", target: "/category" },
  // { name: "GEN" },
  // { name: "ZORA" },
  // { name: "FORGE" },
  // { name: "HUMAN PARTS" },
  // { name: "MARKER" },
  // { name: "LEVEL" },
  // { name: "HEATED" }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, target, selected }) => {
  return (
    <Link to={target} style={{ textDecoration: "none" }}>
      <Button
        variant="text"
        size="small"
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        {text}
      </Button>
    </Link>
    // <div className={`menu-item ${selected ? "active" : ""}`}>
    //   {text}
    //   <Link><Button></Button></Link>
    //   <Link to={target}></Link>
    // </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (list, target) =>
  list.map(el => {
    const { name } = el;

    return (
      <MenuItem
        text={el.name}
        key={el.name}
        target={el.target}
        selected={selected}
      />
    );
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const selected = "item1";

export default class Category extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
    // this.state = {
    //   categories: []
    // };
  }

  // componentDidMount() {
  //   axios.get(`http://localhost:7000/api/v1/categories`).then(res => {
  //     const persons = res.data;
  //     console.log(persons);
  //     this.setState({ categories: persons });
  //   });
  // }

  state = {
    selected
  };

  onSelect = key => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div className="App">
        <ScrollMenu
          data={this.props.data.map(item => {
            
            return (
              <MenuItem
                text={item.name}
                key={item.name}
                target={`category/${item.id}`}
                selected={selected}
              />
            );
          })}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

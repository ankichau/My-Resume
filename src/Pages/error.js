import React, { Component } from "react";
import ListItem from "./listitems.js";

export default class Error extends Component {
  state = {
    items: [],
    currentItems: {
      text: "",
      key: ""
    }
  };
  handelinput = e => {
    this.setState({
      currentItems: {
        text: e.target.value,
        key: Date.now()
      }
    });
  };
  additems = e => {
    e.preventDefault();
    const item = this.state.currentItems;
    console.log(item);
    if (item !== "") {
      const newitem = [...this.state.items, item];
      console.log(newitem);
      this.setState({
        items: newitem,
        currentItems: {
          text: "",
          key: ""
        }
      });
    }
  };
  deleteitems = key => {
    const featureitem = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: featureitem
    });
  };
  itemupdate = (text, key) => {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items
    });
  };
  render() {
    const { currentItems, items } = this.state;
    return (
      <div className="add">
        <header>
          <form id="to-do-form" onSubmit={this.additems}>
            <input
              type="text"
              placeholder="enter text"
              value={currentItems.text}
              onChange={this.handelinput}
            />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItem
          items={items}
          deleteitem={this.deleteitems}
          setUpdate={this.itemupdate}
        />
      </div>
    );
  }
}

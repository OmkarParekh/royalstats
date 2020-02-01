import React, { Component } from "react";
import Sidebar from "react-sidebar";
import Navbar from "../Navbar";
import NavItems from "./NavItems";
import "./sidebar.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
  }

  onSetSidebarOpen = () =>
    this.setState({ sidebarOpen: !this.state.sidebarOpen });

  render() {
    return (
      <div>
        <Sidebar
          sidebar={<NavItems />}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={styles.sidebar}
          sidebarClassName="sidebar-custome"
          pullRight
        >
          <Navbar toggleSidebar={this.onSetSidebarOpen} />
          {this.props.children}
        </Sidebar>
        <div className="clearfix" />
      </div>
    );
  }
}

const styles = {
  sidebar: {
    sidebar: {
      background: "white"
    }
  }
};

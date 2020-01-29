import React, { Component } from "react";
import Sidebar from "react-sidebar";
import Navbar from "../Navbar";
import SideNav from "./SideNav";

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
      <Sidebar
        sidebar={<SideNav />}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={styles.sidebar}
        sidebarClassName="sidebar-custome"
        pullRight
      >
        <Navbar toggleSidebar={this.onSetSidebarOpen} />
      </Sidebar>
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

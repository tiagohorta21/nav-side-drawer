// React
import React, { Component } from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";
// Components
import SideBar from "./components/SideBar";

export default class Drawer extends Component {
  render() {
    return (
      <div className={css(styles.mainDiv)}>
        <SideBar />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  mainDiv: { height: "100%" }
});

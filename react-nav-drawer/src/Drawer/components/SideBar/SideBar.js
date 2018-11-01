// React
import React, { Component } from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";

export default class SideBar extends Component {
  render() {
    return <div className={css(styles.mainDiv)}>Hello</div>;
  }
}

const styles = StyleSheet.create({
  mainDiv: {
    backgroundColor: "lightblue",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    width: 64
  }
});

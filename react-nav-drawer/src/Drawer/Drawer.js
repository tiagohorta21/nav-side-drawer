// React
import React, { Component } from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite";

export default class Drawer extends Component {
  render() {
    return <div className={css(styles.mainDiv)}>Hello World</div>;
  }
}

const styles = StyleSheet.create({
  mainDiv: { backgroundColor: "red" }
});

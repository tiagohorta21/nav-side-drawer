// React
import React, { Component } from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";
// Helpers
import classNames from "classnames";

export default class SideBar extends Component {
  render() {
    const burgerIcon = classNames("icon-ic_burger", css(styles.burgerIcon));
    return (
      <div className={css(styles.mainDiv)}>
        <div className={css(styles.iconDiv)}>
          <div className={burgerIcon} />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  burgerIcon: { fontSize: 24 },
  iconDiv: {
    alignItems: "center",
    display: "flex",
    height: 64,
    justifyContent: "center",
    width: "100%"
  },
  mainDiv: {
    backgroundColor: "lightblue",
    display: "flex",
    height: "100%",
    width: 64
  }
});

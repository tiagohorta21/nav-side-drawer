// React
import React, { Component } from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";
// Helpers
import classNames from "classnames";
// Components
import Icon from "./components/Icon";

export default class SideBar extends Component {
  createIconsArray = () => {
    const accountIcon = classNames("icon-ic_account", css(styles.Icon));
    const bookmarkIcon = classNames("icon-ic_bookmark", css(styles.Icon));
    const burgerIcon = classNames("icon-ic_burger", css(styles.burgerIcon));
    const dateIcon = classNames("icon-ic_date", css(styles.Icon));
    const puzzleIcon = classNames("icon-ic_puzzle", css(styles.Icon));

    const icons = [burgerIcon, accountIcon, bookmarkIcon, dateIcon, puzzleIcon];
    return icons;
  };
  render() {
    const iconsArray = this.createIconsArray();
    return (
      <div className={css(styles.mainDiv)}>
        {iconsArray.map((icon, index) => {
          return <Icon icon={icon} key={index} />;
        })}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  burgerIcon: {
    fontSize: 24,
    color: "#778899",
    ":hover": { cursor: "pointer" }
  },
  Icon: {
    fontSize: 24,
    color: "#778899",
    ":hover": { color: "white", cursor: "pointer" }
  },
  mainDiv: {
    backgroundColor: "#87CEFA",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: 64
  }
});

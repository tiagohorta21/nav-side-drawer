// React
import React, { Component } from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";
// Helpers
import classNames from "classnames";
// Components
import Icon from "./components/Icon";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { openDrawer: false, selectedIcon: "" };
  }

  createIconsArray = () => {
    const { openDrawer } = this.state;

    const accountIcon = classNames(
      "icon-ic_account",
      css(styles.Icon, !openDrawer && styles.IconHover)
    );
    const bookmarkIcon = classNames(
      "icon-ic_bookmark",
      css(styles.Icon, !openDrawer && styles.IconHover)
    );
    const dateIcon = classNames(
      "icon-ic_date",
      css(styles.Icon, !openDrawer && styles.IconHover)
    );
    const puzzleIcon = classNames(
      "icon-ic_puzzle",
      css(styles.Icon, !openDrawer && styles.IconHover)
    );

    const icons = [
      { icon: accountIcon, label: "Account" },
      { icon: bookmarkIcon, label: "Bookmark" },
      { icon: dateIcon, label: "Date" },
      { icon: puzzleIcon, label: "Puzzle" }
    ];
    return icons;
  };
  selectIcon = iconIndex => () => {
    this.setState({
      selectedIcon: iconIndex
    });
  };
  handleOpenDrawer = () => {
    this.setState(prevState => ({
      openDrawer: !prevState.openDrawer
    }));
  };

  render() {
    const { openDrawer, selectedIcon } = this.state;
    const burgerIcon = classNames("icon-ic_burger", css(styles.burgerIcon));
    const iconsArray = this.createIconsArray();
    return (
      <div className={css(styles.mainDiv, openDrawer && styles.openedMainDiv)}>
        <div className={css(styles.burgerIconDiv)}>
          <div className={burgerIcon} onClick={this.handleOpenDrawer} />
        </div>
        {iconsArray.map((iconArray, index) => {
          return (
            <Icon
              icon={iconArray.icon}
              iconNumber={index}
              isDrawerOpen={openDrawer}
              key={index}
              label={iconArray.label}
              selectedIcon={selectedIcon}
              selectIcon={this.selectIcon}
            />
          );
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
  burgerIconDiv: {
    alignItems: "center",
    display: "flex",
    height: 64,
    justifyContent: "center",
    width: 64
  },
  Icon: {
    fontSize: 24,
    color: "#778899"
  },
  IconHover: {
    ":hover": { color: "white", cursor: "pointer" }
  },
  mainDiv: {
    backgroundColor: "#87CEFA",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    transition: "width 0.3s",
    width: 64
  },
  openedMainDiv: {
    width: 240
  }
});

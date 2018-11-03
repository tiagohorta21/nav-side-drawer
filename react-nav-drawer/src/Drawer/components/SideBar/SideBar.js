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
    const accountIcon = classNames("icon-ic_account", css(styles.Icon));
    const bookmarkIcon = classNames("icon-ic_bookmark", css(styles.Icon));
    const dateIcon = classNames("icon-ic_date", css(styles.Icon));
    const puzzleIcon = classNames("icon-ic_puzzle", css(styles.Icon));

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
    const mainIcon = classNames(
      openDrawer ? "icon-ic_close" : "icon-ic_burger",
      css(styles.Icon)
    );
    const iconsArray = this.createIconsArray();
    return (
      <div className={css(styles.mainDiv, openDrawer && styles.openedMainDiv)}>
        <div className={css(styles.innerDiv)}>
          <div className={css(styles.iconContainer)}>
            <div className={mainIcon} onClick={this.handleOpenDrawer} />
          </div>
          {openDrawer && (
            <div className={css(styles.mainLabelDiv)}>{"Application"}</div>
          )}
        </div>
        {iconsArray.map((iconArray, index) => {
          return (
            <Icon
              closeDrawer={this.handleOpenDrawer}
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
  burgerIconDiv: {
    alignItems: "center",
    display: "flex",
    height: 64,
    justifyContent: "center",
    width: 64
  },
  Icon: { color: "#778899", fontSize: 24, ":hover": { cursor: "pointer" } },
  iconContainer: { padding: 12 },
  innerDiv: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: 54,
    margin: 8
  },
  mainDiv: {
    backgroundColor: "#87CEFA",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    transition: "width 0.3s",
    width: 64
  },
  mainLabelDiv: { color: "#778899", fontFamily: "Helvetica", fontWeight: 200 },
  openedMainDiv: { width: 240 }
});

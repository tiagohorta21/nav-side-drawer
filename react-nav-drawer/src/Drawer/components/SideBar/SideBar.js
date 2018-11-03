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

    const icons = [accountIcon, bookmarkIcon, dateIcon, puzzleIcon];
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
      <div className={css(styles.mainDiv, openDrawer && styles.opennedMainDiv)}>
        <div className={css(styles.burgerIconDiv)}>
          <div className={burgerIcon} onClick={this.handleOpenDrawer} />
        </div>
        {iconsArray.map((icon, index) => {
          return (
            <Icon
              icon={icon}
              iconNumber={index}
              key={index}
              selectIcon={this.selectIcon}
              selectedIcon={selectedIcon}
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
    color: "#778899",
    ":hover": { color: "white", cursor: "pointer" }
  },
  mainDiv: {
    backgroundColor: "#87CEFA",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    transition: "width 0.4s",
    width: 64
  },
  openedMainDiv: {
    width: 240
  }
});

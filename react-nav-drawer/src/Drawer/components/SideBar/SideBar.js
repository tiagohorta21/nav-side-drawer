// React
import React, { Component } from "react";
// Helpers
import classNames from "classnames";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";
// Translations
import translation from "./../../../config/translation";
// Globals
import Globals from "./../../../config/globals";
// Components
import Icon from "./components/Icon";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { openDrawer: false, selectedIcon: "" };
  }

  createIconsArray = () => {
    const accountIcon = classNames(Globals.Icons.accountIcon, css(styles.icon));
    const bookmarkIcon = classNames(
      Globals.Icons.bookmarkIcon,
      css(styles.icon)
    );
    const dateIcon = classNames(Globals.Icons.dateIcon, css(styles.icon));
    const puzzleIcon = classNames(Globals.Icons.puzzleIcon, css(styles.icon));

    const icons = [
      { icon: accountIcon, label: translation.Drawer.firstIconLabel },
      { icon: bookmarkIcon, label: translation.Drawer.secondIconLabel },
      { icon: dateIcon, label: translation.Drawer.thirdIconLabel },
      { icon: puzzleIcon, label: translation.Drawer.fourthIconLabel }
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
      openDrawer ? Globals.Icons.closeIcon : Globals.Icons.burgerIcon,
      css(styles.icon)
    );
    const iconsArray = this.createIconsArray();
    return (
      <div className={css(styles.mainDiv, openDrawer && styles.openedMainDiv)}>
        <div className={css(styles.innerDiv)}>
          <div className={css(styles.iconContainer)}>
            <div className={mainIcon} onClick={this.handleOpenDrawer} />
          </div>
          {openDrawer && (
            <div className={css(styles.mainLabelDiv)}>
              {translation.Drawer.mainLabel}
            </div>
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
  icon: {
    color: Globals.Colors.Gray,
    fontSize: 24,
    ":hover": { cursor: "pointer" }
  },
  iconContainer: { padding: 12 },
  innerDiv: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: 54,
    margin: 8
  },
  mainDiv: {
    backgroundColor: Globals.Colors.Blue,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    transition: "width 0.3s",
    width: 64
  },
  mainLabelDiv: {
    color: Globals.Colors.Gray,
    fontFamily: Globals.Fonts.Helvetica,
    fontWeight: 200
  },
  openedMainDiv: { width: 240 }
});

// React
import React from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";

export const Icon = ({ icon, iconNumber, selectIcon, selectedIcon }) => {
  return (
    <div
      className={css(
        styles.iconDiv,
        selectedIcon === iconNumber && styles.selectedIcon
      )}
    >
      <div className={icon} onClick={selectIcon(iconNumber)} />
    </div>
  );
};

const styles = StyleSheet.create({
  iconDiv: {
    alignItems: "center",
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    display: "flex",
    height: 64,
    justifyContent: "center",
    width: 54
  },
  selectedIcon: {
    borderLeft: "5px solid #778899"
  }
});

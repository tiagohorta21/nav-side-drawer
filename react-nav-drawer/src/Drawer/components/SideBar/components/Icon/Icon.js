// React
import React from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";

export const Icon = ({
  closeDrawer,
  icon,
  iconNumber,
  isDrawerOpen,
  label,
  selectIcon,
  selectedIcon
}) => {
  return (
    <React.Fragment>
      {isDrawerOpen ? (
        <div className={css(styles.iconOpenedDiv)}>
          <div className={css(styles.iconOpenedInnerDiv)} onClick={closeDrawer}>
            <div className={css(styles.iconContainer)}>
              <div className={icon} />
            </div>
            <div className={css(styles.labelDiv)}>{label}</div>
          </div>
        </div>
      ) : (
        <div
          className={css(
            styles.iconDiv,
            selectedIcon === iconNumber && styles.selectedIcon
          )}
        >
          <div className={icon} onClick={selectIcon(iconNumber)} />
        </div>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    padding: 12
  },
  iconDiv: {
    alignItems: "center",
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    display: "flex",
    height: 64,
    justifyContent: "center",
    width: 54
  },
  iconOpenedDiv: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: 64,
    width: "100%"
  },
  iconOpenedInnerDiv: {
    alignItems: "center",
    borderRadius: 4,
    display: "flex",
    flexDirection: "row",
    height: 54,
    margin: 8,
    width: "100%",
    ":hover": { backgroundColor: "rgb(176, 196, 222, 0.5)", cursor: "pointer" }
  },
  labelDiv: {
    color: "#778899",
    fontFamily: "Helvetica",
    fontWeight: 200
  },
  selectedIcon: {
    borderLeft: "5px solid #778899"
  }
});

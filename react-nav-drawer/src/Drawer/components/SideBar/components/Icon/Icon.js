// React
import React from "react";
// Aphrodite
import { StyleSheet, css } from "aphrodite/no-important";

export const Icon = ({ icon }) => {
  return (
    <div className={css(styles.iconDiv)}>
      <div className={icon} />
    </div>
  );
};

const styles = StyleSheet.create({
  iconDiv: {
    alignItems: "center",
    display: "flex",
    height: 64,
    justifyContent: "center",
    width: "100%"
  }
});

import React from "react";

export default function ProductHeadline(props) {
  const { maxWidth = "445px", color = "#000000", children } = props;
  const styles = {
    maxWidth: maxWidth,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "44px",
    color: color,
    letterSpacing: "1.42857px",
    textTransform: "uppercase",
  };
  return <h2 style={styles}>{children}</h2>;
}

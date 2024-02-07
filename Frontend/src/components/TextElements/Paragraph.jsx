import React from "react";

export default function Paragraph(props) {
  const {
    maxWidth = "unset",
    color = "#000000",
    opacity = "0.5",
    margin = "32px 0 0 0",
    children,
  } = props;

  const styles = {
    maxWidth: maxWidth,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "15px",
    lineHeight: "25px",
    color: color,
    opacity: opacity,
    margin: margin,
  };

  return <p style={styles}>{children}</p>;
}

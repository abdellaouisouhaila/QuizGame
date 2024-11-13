import Circle from "../circle/Circle";
import React from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const Submit = ({
  children,
  display = "flex",
  flexDirection = "column",
  justifyContent = "center",
  alignItems = "center",
  height = "50%",
  width = "30%",
  borderRadius = "30px 30px 30px 30px",
  background = "#FFFFFF",
  padding = "5px",
  color = "#696F79",
  style = {},
}) => {
  const boxStyle = {
    display,
    flexDirection,
    justifyContent,
    alignItems,
    borderRadius,
    height,
    width,
    background,
    padding,
    color,
    ...style,
  };

  const containerStyle = {
    position: "fixed", // Fixed position to overlay the entire screen
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay background
    zIndex: 1000, // Ensure it appears on top
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}
      onClick={(e) => e.stopPropagation()} //Prevent closing when clicking inside modal
      >
        {children}
        <Circle>
          <QuestionMarkIcon />
        </Circle>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "0.5px",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#000000",
            marginTop: "20%",
            textAlign: "center",
          }}
        >
          Are you Sure you want to submit Quiz?
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "18px",
            fontWeight: "700",
            letterSpacing: "0.5px",
            color: "#000000",
            width: "80%", 
            marginTop: "10%", 
            justifyContent: "center",
            gap: "100px", 
          }}
        >
          <span style={{ cursor: "pointer" }}>No</span>
          <span style={{ cursor: "pointer" }}>Yes</span>
        </div>
      </div>
    </div>
  );
};

export default Submit;

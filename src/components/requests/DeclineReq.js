import Circle from "../circle/Circle";
import React from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const DeclineReq = ({
  children,
  display = "flex",
  flexDirection = "column",
  justifyContent = "center",
  alignItems = "center",
  height = "366px",
  width = "50%",
  borderRadius = "30px 30px 30px 30px",
  background = "#FFFFFF",
  boxShadow = "0px 15px 40px 5px #EDEDED",
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
    boxShadow,
    padding,
    color,
    ...style,
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    width: "80vw",
    backgroundColor: "#EEEEF0",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
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
            marginTop: "20%", // Adds a little space above
            alignItems: "center",
            textAlign: "center",
          }}
        >
         Are you sure you want to decline request?
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "18px",
            fontWeight: "700",
            letterSpacing: "0.5px",
            color: "#000000",
            width: "80%", // Adjusts to the full width of the parent div
            marginTop: "10%", // Adds a little space above
          }}
        >
          <span style={{ cursor: "pointer" }}>No</span>
          <span style={{ cursor: "pointer" }}>Yes</span>
        </div>
      </div>
    </div>
  );
};

export default DeclineReq;

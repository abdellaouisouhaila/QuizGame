import React from "react";
import comeback from "../../assets/comeback.png";

const Score = ({
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
      <div
        style={boxStyle}
        onClick={(e) => e.stopPropagation()} //Prevent closing when clicking inside modal
      >
        {children}
        <div className="image-container">
          <img src={comeback} alt="Image 1" className="image-center" 
          style={{marginTop:'10px'}}
          />
        </div>
        <div
          style={{
            fontSize: "17px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "0.5px",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#000000",
            marginTop: "8%",
            textAlign: "center",
          }}
        >
          Congratulations you have passed
        </div>
        <div
          style={{
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "0.5px",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#000000",
            marginTop: "2%",
            textAlign: "center",
          }}
        >
          You scored 80%
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "15px",
            fontWeight: "700",
            letterSpacing: "0.5px",
            color: "#000000",
            width: "80%",
            marginTop: "6%",
            justifyContent: "center",
            gap: "100px",
          }}
        >
          <span style={{ cursor: "pointer" }}>Review Quiz</span>
        </div>
      </div>
    </div>
  );
};

export default Score;

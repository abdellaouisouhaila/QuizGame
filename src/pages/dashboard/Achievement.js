import React from "react";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import "styles/dashboard/Achievement.css";
import LinearProgress from "@mui/material/LinearProgress";
import comeback from "../../assets/comeback.png";
import winner from "../../assets/winner.png";
import lucky from "../../assets/lucky.png";

const Achievement = () => {
  const progressValue = 70;
  return (
    <Grid container direction="column" sx={{ paddingTop: "5%" }}>
      <Grid item container alignItems="center" spacing={2}>
        <Grid item xs={6} sm={6}>
          <div className="achievements">Achievements</div>
        </Grid>
        <Grid item xs={6} sm={6}>
          <div className="linear-progress" style={{ width: "70%", margin: "0 auto" }}>
            <LinearProgress
              variant="determinate"
              value={progressValue}
              sx={{
                height: 8,
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#C4C4C4",
                },
                backgroundColor: "#F5F5F5",
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="box-content">
            <div className="achievement-container">
              <div className="row">
                <div className="image-container">
                  <img src={comeback} alt="Image 1" className="image-left" />
                  <p className="caption">Comeback</p>
                </div>
                <div className="image-container">
                  <img src={winner} alt="Image 2" className="image-right" />
                  <p className="caption">Winner</p>
                </div>
              </div>
              <div className="row">
                <div className="image-container">
                  <img src={lucky} alt="Image 3" className="image-center" />
                  <p className="caption">Lucky</p>
                </div>
              </div>
            </div>
            <Divider
              sx={{
                marginTop: "40px",
                border: "1px solid #DADADA",
              }}
            />
            <div
              className="view-all"
              style={{ cursor: "pointer", color: "#696F79", marginTop: "20px" }}
            >
              View All
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Achievement;

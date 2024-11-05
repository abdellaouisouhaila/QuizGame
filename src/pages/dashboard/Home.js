import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import FlagIcon from "@mui/icons-material/Flag";
import LinearProgress from "@mui/material/LinearProgress";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "styles/dashboard/Home.css";
import profilePic from "../../assets/profilePic.png";
import { Grid } from "@mui/material";
import Achievement from "./Achievement";
import FeaturedCategory from "./Featuredcategory";

const Home = () => {
  const progressValue = 70;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "150px",
            minHeight: "180px",
          }}
        >
          <img
            src={profilePic}
            alt="pic"
            className="profile-pic"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <div className="quiz-passed">
            <Stack spacing={2}>
              <span className="userName">Oluwatobi Olowu</span>
              <span className="bonusBoos">Bonus booster 24lv</span>
              <div className="linear-progress">
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
              <Stack direction="row" flexWrap="wrap" justifyContent={"center"}>
                {[
                  // Create an array of your items to avoid repetition
                  {
                    icon: <FlagIcon />,
                    value: "27",
                    label: "Quiz Passed",
                  },
                  {
                    icon: <AccessTimeFilledIcon />,
                    value: "27min",
                    label: "Fastest Time",
                  },
                  {
                    icon: <CheckCircleIcon />,
                    value: "20",
                    label: "Correct Answers",
                  },
                ].map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    container
                    alignItems="center"
                    key={index}
                  >
                    <Grid item xs={3} container justifyContent="center">
                      <Box
                        className="icon-box"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </Box>
                    </Grid>
                    <Grid item xs={9}>
                      <div
                        className="span-content"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <div
                          className="spans"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <div className="quiz-class">
                            <span>{item.value}</span>
                          </div>
                          <div className="quiz-answers">
                            <span>{item.label}</span>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                ))}
              </Stack>
            </Stack>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={12} sm={6}>
          <Achievement />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FeaturedCategory />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

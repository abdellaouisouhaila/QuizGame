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
import Achievement from '../dashboard/Achievement';
import FeaturedCategory from "./Featuredcategory";


const Home = () => {
  const progressValue = 70;
  return (
    <div className="main-content">
      <div className="page-content">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={4}
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
                alt="Picture"
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
            <Grid item xs={8}>
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
                  <Stack direction="row" spacing={2}>
                    <Grid item xs={4} container>
                      <Grid item xs={4}>
                        <Box className="icon-box">
                          <FlagIcon />
                        </Box>
                      </Grid>
                      <Grid item xs={8}>
                      <div className="span-content">
                        <div className="spans">
                          <div className="quiz-class">
                            <span>27</span>
                          </div>
                          <div className="quiz-answers">
                            <span>Quiz Passed</span>
                          </div>
                        </div>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid item xs={4} container>
                      <Grid item xs={4}>
                        <Box className="icon-box">
                          <AccessTimeFilledIcon />
                        </Box>
                      </Grid>
                      <Grid item xs={8}>
                      <div className="span-content">
                        <div className="spans">
                          <div className="quiz-class">
                            <span>27min</span>
                          </div>
                          <div className="quiz-answers">
                            <span>Fastest Time</span>
                          </div>
                        </div>
                        </div>
                      </Grid>
                    </Grid>

                    <Grid item xs={4} container>
                      <Grid item xs={4}>
                        <Box className="icon-box">
                          <CheckCircleIcon />
                        </Box>
                      </Grid>
                      <Grid item xs={8}>
                        <div className="span-content">
                          <div className="spans">
                            <div className="quiz-class">
                              <span>200</span>
                            </div>
                            <div className="quiz-answers">
                              <span>Correct Answers</span>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Stack>
                </Stack>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: "20px" }}>
            <Grid item xs={6}>
              <Achievement />
            </Grid>
            <Grid item xs={6}>
              <FeaturedCategory />
            </Grid>
          </Grid>
          
        </Box>
        
      </div>
      
    </div>
  );
};
export default Home;

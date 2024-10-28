import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import FlagIcon from "@mui/icons-material/Flag";
import LinearProgress from "@mui/material/LinearProgress";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "styles/dashboard/Home.css";
import profilePic from "../../assets/profilePic.png";
import { Grid, Paper, Typography } from "@mui/material";

const Home = () => {
  return (
    <div className="main-content">
      <div className="page-content">
        <img src={profilePic} alt="Picture" className="profile-pic" />
        <div className="quiz-passed">
          <span>
            <Box sx={{ width: "100%" }}>
              <Stack spacing={2}>
                <span className="userName">Oluwatobi Olowu</span>
                <span className="bonusBoos">Bonus booster 24lv</span>
                <div className="linear-progress">
                  <LinearProgress />
                </div>
                <Stack direction="row" spacing={2}>
                  <Box className="icon">
                    <FlagIcon />
                  </Box>
                  <div className="spans">
                    <div className="quiz-class">
                      <span>27</span>
                    </div>
                    <div className="quiz-answers">
                      <span>Quiz Passed</span>
                    </div>
                  </div>

                  <Box className="icon">
                    <AccessTimeFilledIcon />
                  </Box>
                  <div className="spans">
                    <div className="quiz-class">
                      <span>27min</span>
                    </div>
                    <div className="quiz-answers">
                      <span>Fastest Time</span>
                    </div>
                  </div>
                  <Box className="icon">
                    <CheckCircleIcon />
                  </Box>
                  <div className="spans">
                    <div className="quiz-class">
                      <span>200</span>
                    </div>
                    <div className="quiz-answers">
                      <span>Correct Answers</span>
                    </div>
                  </div>
                </Stack>
              </Stack>
            </Box>
          </span>
        </div>
      </div>
     
    </div>
  );
};
export default Home;

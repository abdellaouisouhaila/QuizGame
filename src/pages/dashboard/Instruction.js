import { Layout } from "components/Layout";
import React from "react";
import "../../styles/dashboard/Instruc.css";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import history from "../../assets/history.png";
import { useNavigate } from "react-router-dom";

const Instruction = () => {
  const navigate = useNavigate();
  const navigateToPage = () => {
    navigate("/answer");
  };
  return (
    <Layout>
      <Stack spacing={2}>
        <span className="history-quiz">History Quiz</span>
        <span className="featured-category">
          Read the following instructions
        </span>
      </Stack>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={6} sm={6}>
          <div className="image-container">
            <img src={history} alt="his" className="featured-image" style={{borderRadius:"30px"}}/>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
          <Grid container  sx={{height:"100%"}}>
            <Grid item xs={6} >
              <div className="inst" >
                <div>Date:</div>
                <div>Time Limit:</div>
                <div>Attempts:</div>
                <div>Points:</div>
              </div>
            </Grid>
            <Grid item xs={6} >
              <div className="timing" >
                <div>28/07/2021</div>
                <div>30 Mins</div>
                <div>Once</div>
                <div>200 Points</div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className="inst">Instructions</div>
      <div className="instruction-content">
        This quiz consists of 5 multiple-choice questions. To be successful with
        the quizzes, it’s important to conversant with the topics. Keep the
        following in mind: <br />
        Timing - You need to complete each of your attempts
        in one sitting, as you are allotted 30 minutes to each attempt. Answers
        - You may review your answer-choices and compare them to the correct
        answers after your final attempt. <br /> 
        To start, click the "Start" button. When finished, click the "Submit " button.
      </div>
      <div className="more-btn-container">
        <button className="more-btn" onClick={navigateToPage}>
          Start
        </button>
      </div>
    </Layout>
  );
};

export default Instruction;

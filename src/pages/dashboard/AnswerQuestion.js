import React, { useState } from "react";
import { Layout } from "components/Layout";
import Submit from "../../components/requests/Submit";
import "../../styles/dashboard/Instruc.css";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import history from "../../assets/history.png";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const AnswerQuestion = () => {
  const [isSubmitModalOpen, setSubmitModalOpen] = useState(false);

  const handleNextClick = () => {
    setSubmitModalOpen(true); // Show the Submit modal
  };

  const closeSubmitModal = () => {
    setSubmitModalOpen(false); // Close the Submit modal
  };

  return (
    <Layout>
      <Stack spacing={2}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="history-quiz">History Quiz</span>
          <span className="history-quiz">Timer: 29:09 Mins</span>
        </div>

        <span className="featured-category">Answer the question below</span>
      </Stack>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={6}>
          <div className="image-container">
            <img
              src={history}
              alt="history quiz"
              className="featured-image"
              style={{ borderRadius: "30px" }}
            />
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className="instruction-content">
            <div className="inst">Question 1/5</div>
            <div className="instruction-content">
              Guy Bailey, Roy Hackett, and Paul Stephenson made history in 1963,
              as part of a protest against a bus company that refused to employ
              black and Asian drivers in which UK city?
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="inst">Choose answer</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadioButtonCheckedIcon />
        <span className="featured-category">London</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadioButtonCheckedIcon />
        <span className="featured-category">Edinburgh</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadioButtonCheckedIcon />
        <span className="featured-category">Liverpool</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadioButtonCheckedIcon />
        <span className="featured-category">Canary Wharf</span>
      </div>
      <div className="more-btn-container">
        <button className="more-btn" onClick={handleNextClick}>
          Next
        </button>
      </div>
      {/* Render Submit modal if open */}

      {isSubmitModalOpen && <Submit onClose={closeSubmitModal} />}
    </Layout>
  );
};

export default AnswerQuestion;

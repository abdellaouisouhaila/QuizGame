import React, { useEffect, useState } from "react";
import { Layout } from "components/Layout";
import "../../styles/dashboard/Instruc.css";
import Stack from "@mui/material/Stack";
import { Grid, Typography, CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCategoryDetails } from "utils/triviaApi"; 
const Instruction = () => {
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { categoryId } = useParams(); // Use categoryId from URL
  const navigate = useNavigate();

  useEffect(() => {
    const getCategoryDetails = async () => {
      try {
        const data = await fetchCategoryDetails(categoryId);
        setCategoryData(data);
      } catch (err) {
        setError("Error fetching category details.");
      } finally {
        setLoading(false);
      }
    };

    getCategoryDetails();
  }, [categoryId]);

  const navigateToPage = () => {
    navigate("/answer");
  };

  if (loading) {
    return (
      <Layout>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: "100vh" }}
        >
          <CircularProgress />
        </Grid>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: "100vh" }}
        >
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        </Grid>
      </Layout>
    );
  }

  return (
    <Layout>
      <Stack spacing={2}>
        <span className="history-quiz">{categoryData?.name} - Quiz</span>
        <span className="featured-category">
          Read the following instructions
        </span>
      </Stack>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={6} sm={6}>
          <div className="image-container">
            <img
              src={`https://via.placeholder.com/150?text=${categoryData?.name}`} 
              
              alt={categoryData?.name}
              className="featured-image"
              style={{ borderRadius: "30px" }}
            />
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Grid container sx={{ height: "100%" }}>
            <Grid item xs={6}>
              <div className="inst">
                <div>Date:</div>
                <div>Time Limit:</div>
                <div>Attempts:</div>
                <div>Points:</div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="timing">
                <div>{categoryData?.date}</div>
                <div>{categoryData?.timeLimit} </div>
                <div>{categoryData?.attempts}</div>
                <div>{categoryData?.points} </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className="inst">Instructions</div>
      <div className="instruction-content">
        This quiz consists of {categoryData?.questionCount} multiple-choice questions. To be successful with
        the quizzes, it’s important to be conversant with the topics. Keep the
        following in mind: <br />
        Timing - You need to complete each of your attempts
        in one sitting, as you are allotted {categoryData?.timeLimit} minutes to each attempt. Answers
        - You may review your answer-choices and compare them to the correct
        answers after your final attempt. <br />
        To start, click the "Start" button. When finished, click the "Submit" button.
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

import React from "react";
import Stack from "@mui/material/Stack";
import { Grid, Button } from "@mui/material";
import "../../styles/dashboard/SelectTopic.css";
import history from "../../assets/history.png";
import { Layout } from "components/Layout";

const SelectTopic = () => {
  return (
    <Layout>
      <Stack spacing={2}>
        <span className="select-topic">Select Topic</span>
        <span className="featured-category">Featured Category</span>
      </Stack>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        {[...Array(12)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <div className="image-container">
              <img src={history} alt="Category 2" className="featured-image" />
              <div className="image-caption">History</div>
            </div>
          </Grid>
        ))}
      </Grid>

      <div className="more-btn-container">
        <button className="more-btn">More</button>
      </div>
    </Layout>
  );
};

export default SelectTopic;

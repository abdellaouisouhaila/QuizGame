import React from "react";
import Stack from "@mui/material/Stack";
import { Grid, Button } from "@mui/material";
import "../../styles/dashboard/SelectTopic.css";
import history from "../../assets/history.png";


const Selecttopic = () => {
  return (
    <div className="main-content">

    <div className="page-content">

      <Stack spacing={2}>
        <span className="select-topic">Select Topic</span>
        <span className="featured-category">Featured Category</span>
      </Stack>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={3}>
        <div className="image-container">
            <img src={history} alt="Category 2" className="featured-image" />
            <div className="image-caption">History</div>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className="image-container">
            <img src={history} alt="Category 2" className="featured-image" />
            <div className="image-caption">History</div>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className="image-container">
            <img src={history} alt="Category 2" className="featured-image" />
            <div className="image-caption">History</div>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className="image-container">
            <img src={history} alt="Category 2" className="featured-image" />
            <div className="image-caption">History</div>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className="image-container">
            <img src={history} alt="Category 2" className="featured-image" />
            <div className="image-caption">History</div>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className="image-container">
            <img src={history} alt="Category 2" className="featured-image" />
            <div className="image-caption">History</div>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className="image-container">
            <img src={history} alt="Category 2" className="featured-image" />
            <div className="image-caption">History</div>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className="image-container">
            <img src={history} alt="Category 2" className="featured-image" />
            <div className="image-caption">History</div>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className="image-container">
            <img src={history} alt="Category 2" className="featured-image" />
            <div className="image-caption">History</div>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className="image-container">
            <img src={history} alt="Category 2" className="featured-image" />
            <div className="image-caption">History</div>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className="image-container">
            <img src={history} alt="Category 2" className="featured-image" />
            <div className="image-caption">History</div>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className="image-container">
            <img src={history} alt="Category 2" className="featured-image" />
            <div className="image-caption">History</div>
          </div>
        </Grid>
      
         
        
      </Grid>
      <button className="more-btn">More</button>
    </div>
    </div>
    
  );
};

export default Selecttopic;

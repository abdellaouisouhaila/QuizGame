import React from "react";
import { Grid, Button } from "@mui/material";
import "styles/dashboard/FeaturedCategory.css";
import history from "../../assets/history.png";
import medcine from "../../assets/medcine.png";
import technology from "../../assets/technology.png";
import agriculture from "../../assets/agriculture.png";
import { useNavigate } from "react-router-dom";

const FeaturedCategory = () => {
  const navigate = useNavigate();
  const navigateToPage = () => {
    navigate("/topics");
  };
  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ paddingTop: "5%" }}
      >
        <Grid item xs={6}>
          <div className="featured-category-home">Featured Category</div>
        </Grid>

        <Button
          variant="text"
          className="view-all"
          sx={{ color: "#696F79" }}
          onClick={navigateToPage}
        >
          View All
        </Button>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={6}>
          <div className="image-container">
            <img src={history} alt="Category 2" className="featured-image" />
            <div className="image-caption">History</div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="image-container">
            <img src={medcine} alt="Category 3" className="featured-image" />
            <div className="image-caption">Medcine</div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="image-container">
            <img src={technology} alt="Category 4" className="featured-image" />
            <div className="image-caption">Technology</div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="image-container">
            <img
              src={agriculture}
              alt="Category 4"
              className="featured-image"
            />
            <div className="image-caption">Agriculture</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FeaturedCategory;

import React from "react";
import { Grid } from "@mui/material";

const Featuredcategory = () => {
  return (
    <Grid container sx={{ paddingTop: "5%" }}>
      <Grid item xs={6} container>
        <Grid item xs={6}>
          <div className="featured-category">Featured Category</div>
        </Grid>
        <Grid item xs={6}>
          <div className="view-all">View All</div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Featuredcategory;

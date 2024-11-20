import React, { useEffect, useState } from "react";
import { Grid, Button, CircularProgress, Typography } from "@mui/material";
import "styles/dashboard/FeaturedCategory.css";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "utils/triviaApi"; // Import the API function

const FeaturedCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const allCategories = await fetchCategories();
        setCategories(allCategories.slice(0, 4)); // Limit to 4 categories
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  const navigateToPage = () => {
    navigate("/topics");
  };

  if (loading) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "50vh" }}
      >
        <CircularProgress />
      </Grid>
    );
  }

  if (error) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "50vh" }}
      >
        <Typography variant="h6" color="error">
          Error: {error}
        </Typography>
      </Grid>
    );
  }

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

      <Grid container  sx={{ marginTop: "20px" }}>
        {categories.map((category) => (
          <Grid item xs={6} key={category.id}>
            <div className="image-container">
              <img
                src={`https://via.placeholder.com/150?text=${category.name}`}
                alt={category.name}
                className="featured-image"
              />
              <div className="image-caption">{category.name}</div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeaturedCategory;

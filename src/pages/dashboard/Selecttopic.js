import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import { Grid, CircularProgress, Typography } from "@mui/material";
import "../../styles/dashboard/SelectTopic.css";
import { Layout } from "components/Layout";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "utils/triviaApi"; // Import API utility

const SelectTopic = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  const navigateToPage = () => {
    navigate("/instruction");
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
            Error: {error}
          </Typography>
        </Grid>
      </Layout>
    );
  }

  return (
    <Layout>
      <Stack spacing={2}>
        <span className="select-topic">Select Topic</span>
        <span className="featured-category">Featured Category</span>
      </Stack>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
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

      <div className="more-btn-container">
        <button className="more-btn" onClick={navigateToPage}>
          More
        </button>
      </div>
    </Layout>
  );
};

export default SelectTopic;

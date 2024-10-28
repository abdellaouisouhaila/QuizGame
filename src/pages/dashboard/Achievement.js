import React from "react";

const Achievement = () => {
  return (
    <div>
      <Grid container spacing={2} style={{ height: "100vh" }}>
        <Grid item xs={6}>
          <Paper style={{ height: "100%", padding: "16px" }}>
            <span>
              <h2 className="achievements">Achievements</h2>
            </span>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper style={{ height: "100%", padding: "16px" }}>
            <h2>Featured Category</h2>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Achievement;

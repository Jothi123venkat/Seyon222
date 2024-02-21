import React from "react";
import Images from "../Images.json";
import { Container, Grid } from "@mui/material";

const Animation = () => {
  return (
    <div className="animation-div" id="Gallery">
      <h2>Animation</h2>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          {Images &&
            Images[0].list.map((image, index) => (
              <Grid item sm={12} md={3} lg={3}>
                <img
                  key={index}
                  src={image.url}
                  alt="img"
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    maxWidth: "200px",
                  }}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Animation;

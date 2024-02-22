import React from "react";
import { Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Members = () => {
  return (
    <div className="name-div" id="Showreel">
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item sm={6} md={6} lg={4}>
            {/* <div class="card" style={{ width: "19rem" }}>
              <img src="/Assests/hi.jpg" alt="members" className="mem-img" />

              <div class="card-body">
                <p className="para">Kathiravan.Director | Business Head</p>
              </div>
            </div> */}
            <Card sx={{ maxWidth: 320 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image="/Assests/hi.jpg"
                  alt="green iguana"
                />

                <Typography variant="body2" color="text.secondary">
                  Kathiravan.Director | Business Head
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item sm={6} md={6} lg={4}>
            {/* <div class="card" style={{ width: "19rem" }}>
              <img src="/Assests/hi.jpg" alt="members" className="mem-img" />

              <div class="card-body">
                <p className="para">Remmel Saddano.Technical Head</p>
              </div>
            </div> */}
             <Card sx={{ maxWidth: 320 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image="/Assests/hi.jpg"
                  alt="green iguana"
                />

                <Typography variant="body2" color="text.secondary">
                Remmel Saddano.Technical Head
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item sm={6} md={4} lg={4}>
            {/* <div class="card" style={{ width: "19rem" }}>
              <img src="/Assests/hi.jpg" alt="members" className="mem-img" />

              <div class="card-body">
                <p className="para">Kumaravelan.adviser</p>
              </div>
            </div> */}
               <Card sx={{ maxWidth: 320 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image="/Assests/hi.jpg"
                  alt="green iguana"
                />

                <Typography variant="body2" color="text.secondary">
                Kumaravelan.adviser
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container className="members-text">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sm={12} md={4} lg={4}>
            <p className="mem-para">
              Creative and immensely expe rienced Fine Arts graduate with a
              major in Design and Visual Communication from the College of Fine
              Arts, University of Madras. Over twenty-five years of extensive
              involvement in content development, pre-pro duction, and
              production design across various entertainment sectors. Proven
              track record in art direction, production design, and project
              management within the feature film, anima tien, and latsure
              entertainment Industries. Managed design prejects across
              international locations
            </p>
          </Grid>
          <Grid item sm={12} md={4} lg={4}>
            <p className="mem-para">
              Creative and immensely expe rienced Fine Arts graduate with a
              major in Design and Visual Communication from the College of Fine
              Arts, University of Madras. Over twenty-five years of extensive
              involvement in content development, pre-pro duction, and
              production design across various entertainment sectors. Proven
              track record in art direction, production design, and project
              management within the feature film, anima tien, and latsure
              entertainment Industries. Managed design prejects across
              international locations
            </p>
          </Grid>
          <Grid item sm={12} md={4} lg={4}>
            <p className="mem-para">
              Creative and immensely expe rienced Fine Arts graduate with a
              major in Design and Visual Communication from the College of Fine
              Arts, University of Madras. Over twenty-five years of extensive
              involvement in content development, pre-pro duction, and
              production design across various entertainment sectors. Proven
              track record in art direction, production design, and project
              management within the feature film, anima tien, and latsure
              entertainment Industries. Managed design prejects across
              international locations
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Members;

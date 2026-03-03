import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
  Button
} from "@mui/material";

const Article = ({ title, description, image }) => {

  const defaultImage =
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b";

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image || defaultImage}
          alt={title}
          sx={{
            height: 200,
            objectFit: "cover",
          }}
        />

        <CardContent>
          <Typography variant="subtitle1">
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions
        sx={{
          justifyContent: "space-between",
          px: 2,
          pb: 1.5,
        }}
      >
        <Button size="small" variant="outlined">
          Ver
        </Button>

        <Button size="small" variant="contained">
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
};

export default Article;
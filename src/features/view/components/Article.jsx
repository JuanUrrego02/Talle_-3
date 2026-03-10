import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
  Button
} from "@mui/material";

export const Article = () => {

  const products = [
    { title: "Camiseta Clemont - Negra", 
      description: "Precio: $150.000", 
      image: "../public/img/1.jpg", 
    },
    { title: "Pantalón Purple - Claro",
      description: "Precio: $200.000",
      image: "../public/img/2.jpg", 
    },
    { title: "Buzo UnderGold - Negro",
      description: "Precio: $180.000", 
      image: "../public/img/3.jpg", 
    },
    { title: "Camiseta UnderGold - Blanca",
      description: "Precio: $120.000", 
      image: "../public/img/4.jpg", 
    },
    {
      title: "Buzo Y/Out - Negro",
      description: "Precio: $180.000",
      image: "../public/img/5.jpg",
    },
    {
      title: "Mocho Amiri - Claro",
      description: "Precio: $120.000",
      image: "../public/img/6.jpg"
    },
    {
      title: "Conjunto Y/Out",
      description: "Precio: $180.000",
      image: "../public/img/7.jpg"

    },
    {
      title: "Buzo Coach - Negro",
      description: "Precio: $120.000",
      image: "../public/img/8.jpg"
    },
  ];


  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>

      <Grid container spacing={3}>

        {products.map((product, index) => (

          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>

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
                  image={product.image}
                  alt={product.title}
                  sx={{
                    height: 300,
                    width: "100%",
                    objectFit: "cover"
                  }}
                />

                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {product.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions
                sx={{
                  justifyContent: "space-between",
                  px: 2,
                  pb: 2
                }}
              >

                <Button size="small" variant="outlined">
                  Ver artículo
                </Button>

                <Button size="small" variant="contained">
                  Comprar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
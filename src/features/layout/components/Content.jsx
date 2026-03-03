import React from "react";
import {
  Box,
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

export const Content = () => {
  const products = [
    {
      title: "Producto 1",
      description: "Descripción breve del producto 1.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      title: "Producto 2",
      description: "Descripción breve del producto 2.",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      title: "Producto 3",
      description: "Descripción breve del producto 3.",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    },
    {
        title: "Producto 4",
        description: "Descripción breve del producto 4.",
        image:
          "https://images.unsplash.com/photo-1503602642458-232111445657",
    },
  ];

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        py: 8,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container maxWidth="lg">

        {/* 🔥 CARTA DE PRESENTACIÓN */}
        <Card sx={{ mb: 6 }}>
          <CardMedia
            component="img"
            height="450"
            image="https://clothesaid.co.uk/wp-content/uploads/2024/10/remarket-manchester.jpg"
            alt="Presentación"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" fontWeight={700}>
              Bienvenido a Nuestro Sistema Carrito
            </Typography>

            <Typography variant="body1" color="text.secondary">
              Aquí podrás explorar una amplia variedad de productos,
              descubrir ofertas especiales y disfrutar de una experiencia
              de compra moderna, rápida y segura.
            </Typography>
          </CardContent>
        </Card>

        {/* 🔥 GRID DE PRODUCTOS */}
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                    height="180"
                    image={`${product.image}?w=500`}
                    alt={product.title}
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

                {/* 🔥 BOTONES */}
                <CardActions
                  sx={{
                    justifyContent: "space-between",
                    px: 2,
                    pb: 2,
                  }}
                >
                  <Button size="small" variant="outlined">
                    Ver artículo
                  </Button>

                  <Button size="small" variant="contained" color="primary">
                    Comprar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};
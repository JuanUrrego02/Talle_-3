import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

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
  Button,
} from "@mui/material";

import { products } from "../../view/utils/catalogo";
import {
  getFavoriteIds,
  toggleFavoriteId,
  FAVORITES_STORAGE_EVENT,
} from "../../view/utils/favoriteCart";
import { addToCart } from "../../view/utils/localstorange";

export const Content = () => {

  const visibleProducts = products.slice(0, 3);
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    const syncFavorites = () => setFavoriteIds(getFavoriteIds());

    const handleFavoritesUpdate = () => {
      setFavoriteIds(getFavoriteIds());
    };

    syncFavorites();

    window.addEventListener(FAVORITES_STORAGE_EVENT, handleFavoritesUpdate);
    window.addEventListener("storage", syncFavorites);

    return () => {
      window.removeEventListener(FAVORITES_STORAGE_EVENT, handleFavoritesUpdate);
      window.removeEventListener("storage", syncFavorites);
    };
  }, []);

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >

      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "450px",
          borderRadius: 4,
          overflow: "hidden"
        }}
      >
        <CardMedia
          component="img"
          image="https://clothesaid.co.uk/wp-content/uploads/2024/10/remarket-manchester.jpg"
          alt="Presentación"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            background: "rgba(0,0,0,0.35)",
            px: 3
          }}
        >
          <Typography variant="h3" fontWeight={700} sx={{ mb: 2 }}>
            Bienvenido a Machester Clothing
          </Typography>

          <Typography variant="h6" sx={{ mb: 3, maxWidth: 700 }}>
            Explora nuestro catálogo de productos, descubre nuevas ofertas
            y disfruta de una experiencia de compra moderna, rápida y segura.
          </Typography>
        </Box>
      </Box>

      {/* PRODUCTOS */}

      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mt: 5, mb: -3, textAlign: "center" }}
      >
        Nuestros Nuevos Productos
      </Typography>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>

          {visibleProducts.map((product) => {
            const productId = product.title;
            const isFavorite = favoriteIds.includes(productId);

            return (
              <Grid item xs={12} sm={6} md={4} key={productId}>

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
                      justifyContent: "center",
                      px: 1,
                      pb: 2,
                      gap: 2
                    }}
                  >

                    <Button size="small" variant="outlined">
                      Ver artículo
                    </Button>

                    <Button size="small" variant="contained" onClick={() => addToCart(product)}>
                      Comprar
                    </Button>

                    <IconButton
                      color="error"
                      aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
                      onClick={() =>
                        setFavoriteIds(toggleFavoriteId(productId))
                      }
                    >
                      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>

                  </CardActions>

                </Card>

              </Grid>
            );
          })}

        </Grid>
      </Container>

    </Box>
  );
};
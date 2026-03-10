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
  FAVORITES_STORAGE_EVENT,
  getFavoriteIds,
  toggleFavoriteId,
} from "../../view/utils/favoriteCart";

export const Favorites = () => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    const syncFavorites = () => setFavoriteIds(getFavoriteIds());

    syncFavorites();
    window.addEventListener(FAVORITES_STORAGE_EVENT, syncFavorites);
    window.addEventListener("storage", syncFavorites);

    return () => {
      window.removeEventListener(FAVORITES_STORAGE_EVENT, syncFavorites);
      window.removeEventListener("storage", syncFavorites);
    };
  }, []);

  const favoriteProducts = products.filter((product) =>
    favoriteIds.includes(product.title)
  );

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mt: 5, mb: -3, textAlign: "center" }}
      >
        Tus Favoritos
      </Typography>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {favoriteProducts.length === 0 ? (
          <Typography variant="h6" color="text.secondary" textAlign="center">
            Aun no tienes productos en favoritos.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {favoriteProducts.map((product) => {
              const productId = product.title;
              const isFavorite = favoriteIds.includes(productId);

              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={productId}>
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
                          objectFit: "cover",
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
                        gap: 2,
                      }}
                    >
                      <Button size="small" variant="outlined">
                        Ver articulo
                      </Button>

                      <Button size="small" variant="contained">
                        Comprar
                      </Button>

                      <IconButton
                        color="error"
                        aria-label={
                          isFavorite
                            ? "Quitar de favoritos"
                            : "Agregar a favoritos"
                        }
                        onClick={() => setFavoriteIds(toggleFavoriteId(productId))}
                      >
                        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </Box>
  );
};
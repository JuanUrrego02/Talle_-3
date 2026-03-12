import React, { useState, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
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

import { products } from "../../view/utils/catalogo";
import {
  getFavoriteIds,
  toggleFavoriteId,
  FAVORITES_STORAGE_EVENT,
} from "../../view/utils/favoriteCart";

import { addToCart } from "../../view/utils/localstorange";

export const Article = () => {

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

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>

      <Grid container spacing={3}>

        {products.map((product) => {
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
                    gap: 1,
                    px: 2,
                    pb: 2
                  }}
                >

                  <Button size="small" variant="outlined">
                    Ver artículo
                  </Button>

                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => addToCart(product)}
                  >
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
  );
};
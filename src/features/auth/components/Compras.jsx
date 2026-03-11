import React, { useEffect, useMemo, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { products } from "../../view/utils/catalogo";
import {
  CART_STORAGE_EVENT,
  getCartItems,
  removeFromCart,
  updateCartQty,
} from "../../view/utils/localstorange";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const syncCart = () => setCartItems(getCartItems());

    syncCart();
    window.addEventListener(CART_STORAGE_EVENT, syncCart);
    window.addEventListener("storage", syncCart);

    return () => {
      window.removeEventListener(CART_STORAGE_EVENT, syncCart);
      window.removeEventListener("storage", syncCart);
    };
  }, []);

  const cartProducts = useMemo(
    () =>
      cartItems
        .map((item) => {
          const product = products.find((entry) => entry.title === item.id);

          if (!product) return null;

          return {
            ...product,
            qty: item.qty,
          };
        })
        .filter(Boolean),
    [cartItems]
  );

  const totalItems = cartProducts.reduce((acc, item) => acc + item.qty, 0);

  return (
    <Box component="main" sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" fontWeight={700} sx={{ mt: 5, mb: -3, textAlign: "center" }}>
        Tu Carrito
      </Typography>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {cartProducts.length === 0 ? (
          <Typography variant="h6" color="text.secondary" textAlign="center">
            Aun no tienes productos en el carrito.
          </Typography>
        ) : (
          <Stack spacing={3}>
            {cartProducts.map((product) => (
              <Card
                key={product.title}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "stretch",
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    width: { xs: "100%", md: 220 },
                    height: { xs: 220, md: "auto" },
                    objectFit: "cover",
                  }}
                />

                <CardContent
                  sx={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", md: "center" },
                    gap: 2,
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {product.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {product.description}
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton
                      color="primary"
                      aria-label="Disminuir cantidad"
                      onClick={() => setCartItems(updateCartQty(product.title, product.qty - 1))}
                    >
                      <RemoveIcon />
                    </IconButton>

                    <Typography variant="h6">{product.qty}</Typography>

                    <IconButton
                      color="primary"
                      aria-label="Aumentar cantidad"
                      onClick={() => setCartItems(updateCartQty(product.title, product.qty + 1))}
                    >
                      <AddIcon />
                    </IconButton>

                    <IconButton
                      color="error"
                      aria-label="Eliminar del carrito"
                      onClick={() => setCartItems(removeFromCart(product.title))}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Stack>
                </CardContent>
              </Card>
            ))}

            <Box
              sx={{
                alignSelf: "flex-end",
                backgroundColor: "white",
                borderRadius: 2,
                px: 3,
                py: 2,
              }}
            >
              <Typography variant="h6">Productos en carrito: {totalItems}</Typography>
            </Box>
          </Stack>
        )}
      </Container>
    </Box>
  );
};
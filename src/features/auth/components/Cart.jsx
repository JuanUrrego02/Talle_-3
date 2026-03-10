import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import {
  CART_STORAGE_EVENT,
  getCartItems,
  removeFromCart,
  saveCartItems,
  updateCartQty
} from "../../view/utils/localstorange";
import { formatPrice, products } from "../../view/utils/catalogo";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const syncCart = () => setCartItems(getCartItems());

    syncCart();
    window.addEventListener("storage", syncCart);
    window.addEventListener(CART_STORAGE_EVENT, syncCart);

    return () => {
      window.removeEventListener("storage", syncCart);
      window.removeEventListener(CART_STORAGE_EVENT, syncCart);
    };
  }, []);

  const cartProducts = useMemo(
    () =>
      cartItems
        .map((item) => {
          const product = products.find((p) => p.id === item.id);
          if (!product) return null;
          return { ...product, qty: item.qty };
        })
        .filter(Boolean),
    [cartItems]
  );

  const total = useMemo(
    () => cartProducts.reduce((acc, item) => acc + item.price * item.qty, 0),
    [cartProducts]
  );

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Mi Carrito
        </Typography>
        {cartProducts.length === 0 ? (
          <Box
            sx={{
              p: 4,
              borderRadius: 3,
              border: "1px dashed #c7c7c7",
              bgcolor: "#fff",
              textAlign: "center"
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>Tu carrito está vacío</Typography>
          </Box>
        ) : (
          <>
            <Grid container spacing={3}>
              {cartProducts.map((product) => (
                <Grid key={product.id} size={{ xs: 12 }}>
                  <Card sx={{ borderRadius: 3, border: "1px solid #e5e5e5" }}>
                    <Stack direction={{ xs: "column", sm: "row" }}>
                      <CardMedia
                        component="img"
                        image={product.image}
                        alt={product.title}
                        sx={{ width: { xs: "100%", sm: 220 }, height: 220, objectFit: "cover" }}
                      />

                      <CardContent sx={{ flex: 1 }}>
                        <Stack spacing={1.2}>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {product.title}
                          </Typography>

                          <Typography sx={{ fontWeight: 700 }}>
                            Precio: {formatPrice(product.price)}
                          </Typography>

                          <Stack direction="row" spacing={1.2} alignItems="center">
                            <Button
                              color="error"
                              onClick={() => setCartItems(removeFromCart(product.id))}
                            >
                              Quitar
                            </Button>
                          </Stack>
                        </Stack>
                      </CardContent>
                    </Stack>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box
              sx={{
                mt: 3,
                p: 3,
                borderRadius: 3,
                border: "1px solid #e5e5e5",
                bgcolor: "#fff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 2
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                Total: {formatPrice(total)}
              </Typography>
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  saveCartItems([]);
                  setCartItems([]);
                }}
              >
                Vaciar carrito
              </Button>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
};
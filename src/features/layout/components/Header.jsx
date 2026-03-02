import * as React from "react";
import { NavLink } from "react-router-dom";

// MUI ICONS
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";

// MUI COMPONENTS
import {AppBar, Toolbar, Button, Stack, Typography, Box, TextField,} from "@mui/material";

export const Header = () => {
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* LEFT SIDE */}
          <Stack direction="row" spacing={1}>
            <Button
              color="inherit"
              component={NavLink}
              to="/"
              startIcon={<HomeIcon />}
            >
              Inicio
            </Button>

            <Button
              color="inherit"
              component={NavLink}
              to="/article"
              startIcon={<ArticleIcon />}
            >
              Artículos
            </Button>

            <Button
              color="inherit"
              component={NavLink}
              to="/offers"
              startIcon={<LocalOfferIcon />}
            >
              Ofertas
            </Button>

            <Button
              color="inherit"
              component={NavLink}
              to="/account"
              startIcon={<PersonIcon />}
            >
              Mi Cuenta
            </Button>

            <Button
              color="inherit"
              component={NavLink}
              to="/purchases"
              startIcon={<ShoppingBagIcon />}
            >
              Mis Compras
            </Button>

            <Button
              color="inherit"
              component={NavLink}
              to="/favorites"
              startIcon={<FavoriteIcon />}
            >
              Favoritos
            </Button>
          </Stack>

          {/* RIGHT SIDE - SEARCH */}
          <Box
            component="form"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <TextField
              size="small"
              variant="outlined"
              placeholder="Buscar productos..."
              sx={{
                bgcolor: "white",
                borderRadius: 1,
              }}
            />
            <Button
              variant="contained"
              color="primary"
              endIcon={<SearchIcon />}
            >
              Buscar
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Esto evita que el contenido quede debajo del AppBar */}
      <Toolbar />
    </>
  );
};
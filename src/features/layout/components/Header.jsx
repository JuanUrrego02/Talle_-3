import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// ICONS
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";


// MUI
import {
  AppBar,
  Badge,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import {
  getFavoriteIds,
  toggleFavoriteId,
  FAVORITES_STORAGE_EVENT,
} from "../../view/utils/favoriteCart";

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [query, setQuery] = React.useState("");
  const [favoriteCount, setFavoriteCount] = React.useState(0);

  React.useEffect(() => {
    const syncFavorites = () => setFavoriteCount(getFavoriteIds().length);

    syncFavorites();
    window.addEventListener(FAVORITES_STORAGE_EVENT, syncFavorites);
    window.addEventListener("storage", syncFavorites);

    return () => {
      window.removeEventListener(FAVORITES_STORAGE_EVENT, syncFavorites);
      window.removeEventListener("storage", syncFavorites);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navItems = [
    { to: "/", label: "Inicio", icon: <HomeIcon /> },
    { to: "/article", label: "Artículos", icon: <ArticleIcon /> },
    { to: "/offers", label: "Ofertas", icon: <LocalOfferIcon /> },
    { to: "/account", label: "Mi Cuenta", icon: <PersonIcon /> },
    { to: "/purchases", label: "Mis Compras", icon: <ShoppingBagIcon /> },
    { to: "/favorites", label: `Favoritos`,  icon: <Badge badgeContent={favoriteCount} color="error"><FavoriteIcon /></Badge> },
  ];

  //MUI COLORS
  const styleAppBar = {
    backgroundColor: grey[500],
    color: "#ffffff"//Texto Oscuro para el constraste con el fondo claro,
  };

  return (
    <>
      <AppBar position="fixed" style={styleAppBar}>
        <Toolbar>

          {/* MENÚ MOBILE */}
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.to}
                  component={NavLink}
                  to={item.to}
                  onClick={handleCloseNavMenu}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* TÍTULO */}
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Manchester Clothing
          </Typography>

          {/* MENÚ DESKTOP */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                color="inherit"
                component={NavLink}
                to={item.to}
                startIcon={item.icon}
                sx={{
                  "&.active": {
                    bgcolor: "rgba(255,255,255,0.15)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* SEARCH DESKTOP */}
          <TextField
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            size="small"
            placeholder="Buscar artículos..."
            sx={{
              display: { xs: "none", md: "flex" },
              bgcolor: "white",
              borderRadius: 1,
              minWidth: 220,
              mx: 2,
              "& .MuiOutlinedInput-root": { bgcolor: "white" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* CARRITO */}
          <IconButton
            color="inherit"
            component={NavLink}
            to="/cart"
          >
            <ShoppingCartIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* Espaciador para que no tape el contenido */}
      <Toolbar />
    </>
  );
};
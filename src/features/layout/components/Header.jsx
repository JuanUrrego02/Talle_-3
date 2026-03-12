import * as React from "react";
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
import CloseIcon from "@mui/icons-material/Close";

// MUI
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Badge,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  TextField,
  InputAdornment,
  Divider,
} from "@mui/material";

import { grey } from "@mui/material/colors";

import {
  FAVORITES_STORAGE_EVENT,
  getFavoriteIds,
} from "../../view/utils/favoriteCart";

import {
  CART_STORAGE_EVENT,
  getCartCount,
} from "../../view/utils/localstorange";

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [favoriteCount, setFavoriteCount] = React.useState(0);
  const [cartCount, setCartCount] = React.useState(0);

  React.useEffect(() => {
    const syncFavorites = () => setFavoriteCount(getFavoriteIds().length);
    const syncCart = () => setCartCount(getCartCount());

    syncFavorites();
    syncCart();

    window.addEventListener(FAVORITES_STORAGE_EVENT, syncFavorites);
    window.addEventListener(CART_STORAGE_EVENT, syncCart);
    window.addEventListener("storage", syncFavorites);
    window.addEventListener("storage", syncCart);

    return () => {
      window.removeEventListener(FAVORITES_STORAGE_EVENT, syncFavorites);
      window.removeEventListener(CART_STORAGE_EVENT, syncCart);
      window.removeEventListener("storage", syncFavorites);
      window.removeEventListener("storage", syncCart);
    };
  }, []);

  const navItems = [
    { to: "/", label: "Inicio", icon: <HomeIcon /> },
    { to: "/article", label: "Artículos", icon: <ArticleIcon /> },
    { to: "/offers", label: "Ofertas", icon: <LocalOfferIcon /> },
    { to: "/account", label: "Mi Cuenta", icon: <PersonIcon /> },
    { to: "/purchases", label: "Mis Compras", icon: <ShoppingBagIcon /> },
    {
      to: "/favorites",
      label: "Favoritos",
      icon: (
        <Badge badgeContent={favoriteCount} color="error">
          <FavoriteIcon />
        </Badge>
      ),
    },
  ];

  const styleAppBar = {
    backgroundColor: grey[500],
    color: "#ffffff",
  };

  return (
    <>
      <AppBar position="fixed" sx={styleAppBar}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: { xs: 1, md: 2 },
            minHeight: { xs: 60, md: 70 },
          }}
        >
          {/* MOBILE MENU BUTTON */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Box>

          {/* LOGO */}
          <Typography
            component={NavLink}
            to="/"
            sx={{
              flexGrow: { xs: 1, md: 0 },
              fontWeight: "bold",
              color: "inherit",
              textDecoration: "none",
              fontSize: { xs: "1.1rem", md: "1.6rem" },
              whiteSpace: "nowrap",
              mr: { md: 3 },
            }}
          >
            Manchester Clothing
          </Typography>

          {/* DESKTOP NAV */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                startIcon={item.icon}
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  "& .MuiSvgIcon-root": {
                    fontSize: 22,
                  },
                  "&.active": {
                    bgcolor: "rgba(255,255,255,0.15)",
                  },
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
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
              borderRadius: 2,
              minWidth: { md: 220, lg: 260 },
              mx: 2,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* CART */}
          <IconButton
            component={NavLink}
            to="/cart"
            color="inherit"
            sx={{ "& svg": { fontSize: 26 } }}
          >
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER MENU */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 270 }}>
          {/* HEADER MENU */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Typography fontWeight="bold" fontSize={20}>
              Manchester
            </Typography>

            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          {/* NAV ITEMS */}
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.to}
                component={NavLink}
                to={item.to}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  py: 1.4,
                }}
              >
                <ListItemIcon sx={{ "& svg": { fontSize: 24 } }}>
                  {item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Spacer */}
      <Toolbar />
    </>
  );
};
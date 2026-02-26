import * as React from "react";
import { NavLink } from "react-router-dom";

//MUI ICONS
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//Mui Componentes
import {AppBar, Toolbar, Container, Button, Stack, Typography } from  '@mui/material';




export const Header = () => {
    return (
        <AppBar>
            <Typography variant="h6">Carrito de Compras</Typography>
            <Typography variant="body1">
                Bienvenido a nuestro sistema de carrito de compras. Aquí podrás explorar una amplia variedad de productos, agregar tus favoritos al carrito y realizar tus compras de manera fácil y segura. ¡Disfruta de tu experiencia de compra con nosotros!
            </Typography>
            <Stack direction="row">
                <Button variant="contained" component={NavLink} to="/" startIcon={<HomeIcon />}>Inicio</Button>
                <Button component={NavLink} to="/article" startIcon={<ArticleIcon />}>Artículos</Button>
                <Button component={NavLink} to="/offers" startIcon={<LocalOfferIcon />}>Ofertas</Button>
                <Button component={NavLink} to="/account" startIcon={<PersonIcon />}>Mi Cuenta</Button>
                <Button component={NavLink} to="/purchases" startIcon={<ShoppingBagIcon />}>Mis Compras</Button>
                <Button component={NavLink} to="/favorites" startIcon={<FavoriteIcon />}>Mis Favoritos</Button>
            </Stack>
            <form role="search">
                <input type="search" placeholder="Buscar Productos..." />
                <Button variant="contained" color="primary" endIcon={<SearchIcon />}>Buscar</Button>
            </form>
        </AppBar>
    );
};

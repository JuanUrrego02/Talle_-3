import React from "react";
import { Box, Container, Divider, Grid, Link, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from "@mui/material/IconButton";
import { grey } from "@mui/material/colors";

const styleAppBar = {
    backgroundColor: grey[500],
    color: "#ffffff"
};
export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                mt: 8,
                color: "#F5F1E8",
                background: `linear-gradient(180deg, ${grey[500]} 0%, #161616 100%)`,
                borderTop: "1px solid rgba(0, 0, 0, 0.35)"
            }}
        >
            <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
                <Grid container spacing={{ xs: 4, md: 6 }}>

                    {/* Marca */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography
                            sx={{
                                fontFamily: "'Playfair Display', 'Times New Roman', serif",
                                fontSize: "1.7rem",
                                letterSpacing: 2,
                                textTransform: "uppercase",
                                color: "#ffffff",
                                mb: 2
                            }}
                        >
                            Manchester Clothing
                        </Typography>

                        <Typography sx={{ color: "rgba(245,241,232,0.76)", lineHeight: 1.8 }}>
                            Manchester Clothing es una marca enfocada en ofrecer ropa moderna y auténtica para quienes buscan destacar con su estilo. Combinamos calidad, diseño y comodidad para crear prendas que se adapten a cualquier ocasión. Nuestro objetivo es brindarte moda que refleje personalidad, actitud y confianza en cada outfit.
                        </Typography>
                    </Grid>

                    {/* Navegación */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography sx={{ fontWeight: 700, mb: 1.5, letterSpacing: 1 }}>
                            Navegación
                        </Typography>

                        <Stack spacing={1.1}>
                            <FooterLink href="#/">Inicio</FooterLink>
                            <FooterLink href="#/article">Artículos</FooterLink>
                            <FooterLink href="#/offers">Ofertas</FooterLink>
                            <FooterLink href="#/favorites">Favoritos</FooterLink>
                        </Stack>
                    </Grid>

                    {/* Servicio */}
                    <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
                        <Typography sx={{ fontWeight: 700, mb: 1.5, letterSpacing: 1 }}>
                            Servicio
                        </Typography>

                        <Stack spacing={1.1}>
                            <FooterText>Ayuda</FooterText>
                            <FooterText>Política de Privacidad</FooterText>
                            <FooterText>Términos de Servicio</FooterText>
                            <FooterText>Soporte</FooterText>
                        </Stack>
                    </Grid>

                    {/* Contacto */}
                    <Grid size={{ xs: 12, md: 2.5 }}>
                        <Typography sx={{ fontWeight: 700, mb: 1.5, letterSpacing: 1 }}>
                            Contacto
                        </Typography>

                        <Stack spacing={1.1}>
                            <FooterText>Email: manchesterclothing@gmail.com</FooterText>
                            <FooterText>Tel: +57 301 401 1433</FooterText>

                            <Stack direction="row" spacing={1}>
                                <IconButton sx={{ color: "#F5F1E8" }}>
                                    <InstagramIcon />
                                </IconButton>

                                <IconButton sx={{ color: "#F5F1E8" }}>
                                    <WhatsAppIcon />
                                </IconButton>

                                <IconButton
                                    component="a"
                                    href="https://github.com/JuanUrrego02/Talle_-3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ color: "#F5F1E8" }}
                                >
                                    <GitHubIcon />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Grid>

                </Grid>

                <Divider sx={{ my: 4, borderColor: "rgba(212, 175, 55, 0.3)" }} />

                <Typography
                    sx={{
                        textAlign: "center",
                        color: "rgba(245,241,232,0.62)",
                        letterSpacing: 0.5
                    }}
                >
                    © {new Date().getFullYear()} Manchester Clothing - Todos los derechos reservados.
                </Typography>

            </Container>
        </Box>
    );
};

const FooterLink = ({ href, children }) => (
    <Link
        href={href}
        underline="none"
        sx={{
            color: "rgba(245,241,232,0.8)",
            transition: "all 220ms ease",
            "&:hover": {
                color: "#D4AF37",
                transform: "translateX(4px)"
            }
        }}
    >
        {children}
    </Link>
);

const FooterText = ({ children }) => (
    <Typography sx={{ color: "rgba(245,241,232,0.8)" }}>
        {children}
    </Typography>
);
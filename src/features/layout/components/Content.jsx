import React from "react";
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
  Button
} from "@mui/material";


export const Content = () => {
  const products = [
    {
      title: "Camiseta Clemont - Negra",
      description: "Precio: $150.000",
      image:
        "https://media.sssinstagram.com/get?__sig=9w9DIOiEogyQfZpOzqotLw&__expires=1772545456&uri=https%3A%2F%2Fscontent-lga3-2.cdninstagram.com%2Fv%2Ft51.82787-15%2F622397890_17924895207196961_8033389692126040863_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080_sh0.08_tt6%26_nc_ht%3Dscontent-lga3-2.cdninstagram.com%26_nc_cat%3D105%26_nc_oc%3DQ6cZ2QFK_XOaC4cUDp2PmpDlhk4WdVBXa42D28Jkb7qNo2dwN7yDB_Ajf9QFi8ES2GOuVxts2-YaeWrzStdeCvFhEEw5%26_nc_ohc%3D7EJvityg2kQQ7kNvwGAyzbM%26_nc_gid%3D8iEnql-ykjxpVD-kT3dmpg%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_AfxCwZ3IcfOQgrsUf-1pTaDx1SM5mT5cyj_AffAsF3hKBQ%26oe%3D69ACBA38%26_nc_sid%3Dd885a2&filename=622397890_17924895207196961_8033389692126040863_n.jpg",
    },
    {
      title: "Pantalón Purple - Claro",
      description: "Precio: $200.000",
      image:
        "https://media.sssinstagram.com/get?__sig=Z7R5NF_aCmQN_gBDU-Trxg&__expires=1772545968&uri=https%3A%2F%2Fscontent-lga3-2.cdninstagram.com%2Fv%2Ft51.82787-15%2F629268580_17927244969196961_4866350106232341215_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080_sh0.08_tt6%26_nc_ht%3Dscontent-lga3-2.cdninstagram.com%26_nc_cat%3D105%26_nc_oc%3DQ6cZ2QH1H2nZYcvYJd-8b0AJfWWfZgnMbPGoK0cjMkxmHTHlnBaK1v3IQCjYcwmv1HcoeS_jOwdFqvZrgaDuViEddwGA%26_nc_ohc%3D7-4_7PIEsfEQ7kNvwF0t7oC%26_nc_gid%3Dg_MZvHrICwXsOqOrbBfnFw%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_Afy404f_hwq3zCzVUd6bWlaQ3WwTCOs0MapCdPWFPzpjbQ%26oe%3D69ACCCA0%26_nc_sid%3Dd885a2&filename=629268580_17927244969196961_4866350106232341215_n.jpg",
    },
    {
      title: "Buzo UnderGold - Negro",
      description: "Precio: $180.000",
      image:
        "https://media.sssinstagram.com/get?__sig=bnvZyavv61oaynBRvkxl_Q&__expires=1772546326&uri=https%3A%2F%2Fscontent-lga3-2.cdninstagram.com%2Fv%2Ft51.82787-15%2F642511954_17928931230196961_5882666316447509749_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080_sh0.08_tt6%26_nc_ht%3Dscontent-lga3-2.cdninstagram.com%26_nc_cat%3D105%26_nc_oc%3DQ6cZ2QFhpEF-HxRsPw5jZLcufohlAAb5ljsa6xhMEwW4bLQLlARTMCGZfkAh1eas3wlnDDHx1RqcXPKHDnGEqPVCRwiQ%26_nc_ohc%3D2bUKcGE6ExsQ7kNvwEBxzRw%26_nc_gid%3DvOcRnOuX7N0N2BtBGIMJcw%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_AfymW0MhpM20KUMh-GmKQnWgnHHLmBqiYT0KVCuevhDjuQ%26oe%3D69ACA1E6%26_nc_sid%3Dd885a2&filename=642511954_17928931230196961_5882666316447509749_n.jpg",
    },
    {
      title: "Camiseta UnderGold - Blanca",
      description: "Precio: $120.000",
      image:
        "https://media.sssinstagram.com/get?__sig=hWHD11coEvMPj9wtp1kdeQ&__expires=1772546530&uri=https%3A%2F%2Fscontent-lga3-2.cdninstagram.com%2Fv%2Ft51.82787-15%2F567157656_17914461234196961_5338804485474769797_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080_sh0.08_tt6%26_nc_ht%3Dscontent-lga3-2.cdninstagram.com%26_nc_cat%3D105%26_nc_oc%3DQ6cZ2QGk1nwBlh4EDLVi9KXXRON__YzQMNPTqWRPj0YttegL2phSz22Mr1mDPx-ONYK7Woeb2R9oq-ak8Gr-a-5gaDD5%26_nc_ohc%3Dxowc826Q3f8Q7kNvwFaVK4z%26_nc_gid%3DAC_WhJdJTEvPZlBmgPWXgA%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_Afz5OUcnw3u0RLXGz86HOFgylu9Kn0wcNdwqXvamFc2Qtw%26oe%3D69ACC74B%26_nc_sid%3Dd885a2&filename=567157656_17914461234196961_5338804485474769797_n.jpg",
    },
  ];

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >

      {/* 🔥 HERO / PRESENTACIÓN FULL WIDTH */}
      <Box sx={{ position: "relative", width: "100%", height: "450px", borderRadius: 4, overflow: "hidden" }}>
        <CardMedia
          component="img"
          image="https://clothesaid.co.uk/wp-content/uploads/2024/10/remarket-manchester.jpg"
          alt="Presentación"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
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
            px: 3,
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

      {/* 🔥 PRODUCTOS */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                    justifyContent: "space-between",
                    px: 2,
                    pb: 2,
                  }}
                >
                  <Button size="small" variant="outlined">
                    Ver artículo
                  </Button>

                  <Button size="small" variant="contained">
                    Comprar
                  </Button>
                </CardActions>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </Box>
  );
};
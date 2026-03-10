export const products = [
    {
      title: "Camiseta Clemont - Negra",
      description: "Precio: $150.000",
      image: "../public/img/1.jpg",
    },
    {
      title: "Pantalón Purple - Claro",
      description: "Precio: $200.000",
      image: "../public/img/2.jpg",
    },
    {
      title: "Buzo UnderGold - Negro",
      description: "Precio: $180.000",
      image: "../public/img/3.jpg",
    },
    {
      title: "Camiseta UnderGold - Blanca",
      description: "Precio: $120.000",
      image: "../public/img/4.jpg",
    },
    {
      title: "Buzo Y/Out - Negro",
      description: "Precio: $180.000",
      image: "../public/img/5.jpg",
    },
    {
      title: "Mocho Amiri - Claro",
      description: "Precio: $120.000",
      image: "../public/img/6.jpg"
    },
    {
      title: "Conjunto Y/Out",
      description: "Precio: $180.000",
      image: "../public/img/7.jpg"

    },
    {
      title: "Buzo Coach - Negro",
      description: "Precio: $120.000",
      image: "../public/img/8.jpg"
    },
  ];

export const formatPrice = (value) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value);
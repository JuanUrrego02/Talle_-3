import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";

export const UseContext = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box
        sx={{
          p: 3,
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper"
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
          Hook useContext
        </Typography>
        <Component1 />
      </Box>
    </Container>
  );
};

function Component1() {
  const [user] = useState("Juancito");

  return (
    <Box sx={{ p: 2, borderRadius: 2, bgcolor: "grey.100" }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Componente 1
      </Typography>
      <Typography sx={{ mb: 2 }}>{`Hola ${user}!`}</Typography>
      <Component2 user={user} />
    </Box>
  );
}

function Component2({ user }) {
  return (
    <Box sx={{ p: 2, borderRadius: 2, bgcolor: "grey.200", mt: 2 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Componente 2
      </Typography>
      <Component3 user={user} />
    </Box>
  );
}

function Component3({ user }) {
  return (
    <Box sx={{ p: 2, borderRadius: 2, bgcolor: "grey.300", mt: 2 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Componente 3
      </Typography>
      <Typography>{`Hola ${user} de nuevo!`}</Typography>
    </Box>
  );
}
import React from "react";
import { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = () => {
    setState((prev) => !prev);
  };

  return [state, toggle];
};

export const UseToggleExample = () => {

  const [show, toggleShow] = useToggle(false);

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
          Custom Hook: useToggle
        </Typography>

        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: "grey.100",
            textAlign: "center",
            mb: 2
          }}
        >
          {show ? (
            <Typography>Contenido Visible</Typography>
          ) : (
            <Typography>Contenido oculto</Typography>
          )}
        </Box>

        <Button variant="contained" onClick={toggleShow}>
          Mostrar / Ocultar
        </Button>
      </Box>
    </Container>
  );
};
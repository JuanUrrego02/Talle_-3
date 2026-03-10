import React, { useEffect, useRef, useState } from "react";
import { Box, Container, TextField, Typography } from "@mui/material";

export const UseRefCounter = () => {
  const [text, setText] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

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
          Hook useRef
        </Typography>

        <TextField
          fullWidth
          label="Escribe aqui"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Box sx={{ p: 2, borderRadius: 2, bgcolor: "grey.100", mt: 2 }}>
          <Typography variant="h6">Renderizados: {renderCount.current}</Typography>
        </Box>
      </Box>
    </Container>
  );
};
import React, { useState, useRef, useEffect } from "react";
import { Container, Typography, TextField } from "@mui/material";

export const UseRefCounter = () => {

  const [text, setText] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <Container>

      <TextField
        label="Escribe aquí"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ marginTop: 2 }}
      />

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Actualizados: {renderCount.current}
      </Typography>

    </Container>
  );
};
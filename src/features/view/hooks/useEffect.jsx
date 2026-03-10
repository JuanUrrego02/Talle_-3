import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";

export const UseEffectCounter = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
          Hook useEffect
        </Typography>

        <Box sx={{ p: 2, borderRadius: 2, bgcolor: "grey.100" }}>
          <Typography variant="h4">Hora: {time.toLocaleTimeString("es-CO")}</Typography>
        </Box>
      </Box>
    </Container>
  );
};
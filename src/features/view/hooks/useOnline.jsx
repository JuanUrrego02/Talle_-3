import { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";

export const UseOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
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
          Hook useOnline
        </Typography>

        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: "grey.100",
            textAlign: "center"
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: isOnline ? "success.main" : "error.main"
            }}
          >
            {isOnline ? "✅ En línea" : "❌ Desconectado"}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
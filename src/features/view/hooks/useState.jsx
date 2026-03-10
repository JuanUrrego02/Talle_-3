import React, { useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

export const UseStateColor = () => {
  const [color, setColor] = useState("red");

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
          Hook useState
        </Typography>

        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: "grey.100",
            mb: 2
          }}
        >
          <Typography variant="h4" sx={{ color, textTransform: "capitalize" }}>
            Color actual: {color}
          </Typography>
        </Box>

        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          <Button variant="contained" type="button" onClick={() => setColor("blue")}>
            Blue
          </Button>
          <Button variant="contained" type="button" color="success" onClick={() => setColor("green")}>
            Green
          </Button>
          <Button variant="contained" type="button" color="error" onClick={() => setColor("red")}>
            Red
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};
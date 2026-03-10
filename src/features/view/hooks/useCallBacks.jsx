import React, { useState, useCallback } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

const CounterButton = React.memo(({ onClick, text }) => {
  console.log(`Child ${text} rendered`);
  return (
    <Button variant="contained" onClick={onClick}>
      {text}
    </Button>
  );
});

export const UseCallbackExample = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = useCallback(() => {
    setCount1((prev) => prev + 1);
  }, []);

  const handleClick2 = useCallback(() => {
    setCount2((prev) => prev + 1);
  }, []);

  console.log("Parent rendered");

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
          Hook useCallback
        </Typography>

        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: "grey.100",
            mb: 2
          }}
        >
          <Typography variant="h6">
            Count 1: {count1}
          </Typography>

          <Typography variant="h6">
            Count 2: {count2}
          </Typography>
        </Box>

        <Stack direction="row" spacing={2}>
          <CounterButton onClick={handleClick1} text="Incrementar 1" />
          <CounterButton onClick={handleClick2} text="Incrementar 2" />
        </Stack>
      </Box>
    </Container>
  );
};
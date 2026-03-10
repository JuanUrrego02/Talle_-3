import React, { useState, useMemo } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

export const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

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
          Hook useMemo
        </Typography>

        {/* TODOS */}
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: "grey.100",
            mb: 2
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            My Todos
          </Typography>

          {todos.map((todo, index) => (
            <Typography key={index}>{todo}</Typography>
          ))}

          <Button
            variant="outlined"
            sx={{ mt: 1 }}
            onClick={addTodo}
          >
            Add Todo
          </Button>
        </Box>

        {/* CONTADOR */}
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: "grey.100"
          }}
        >
          <Typography variant="h6">
            Count: {count}
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mt: 1, mb: 2 }}>
            <Button variant="contained" onClick={increment}>
              +
            </Button>
          </Stack>

          <Typography variant="h6">
            Expensive Calculation
          </Typography>

          <Typography variant="body1">
            {calculation}
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }}>
            La función costosa solo se ejecuta cuando cambia el contador gracias a useMemo.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 100000000; i++) {
    num += 1;
  }
  return num;
};
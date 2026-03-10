import React, { useReducer } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

const initialPlayers = [
  { id: 1, name: "Juan", score: 0 },
  { id: 2, name: "Maria", score: 0 }
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state.map((player) =>
        player.id === action.id
          ? { ...player, score: player.score + 1 }
          : player
      );

    default:
      return state;
  }
};

export const UseReducerScore = () => {
  const [players, dispatch] = useReducer(reducer, initialPlayers);

  const handleIncrease = (player) => {
    dispatch({ type: "INCREASE", id: player.id });
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
          Hook useReducer
        </Typography>

        <Stack spacing={1.5}>
          {players.map((player) => (
            <Box
              key={player.id}
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: "grey.100",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>
                {player.name}: {player.score}
              </Typography>

              <Button variant="contained" onClick={() => handleIncrease(player)}>
                +1 punto
              </Button>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};
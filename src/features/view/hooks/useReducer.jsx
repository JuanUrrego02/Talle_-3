import React, { useReducer, useState } from "react";
import { Container, Typography, Button } from "@mui/material";

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
    <Container>

      <Typography variant="h4" sx={{ mb: 2 }}>
        Puntaje de jugadores
      </Typography>

      {players.map((player) => (
        <div key={player.id}>
          <Typography>
            {player.name}: {player.score}
          </Typography>

          <Button
            variant="contained"
            sx={{ mb: 2 }}
            onClick={() => handleIncrease(player)}
          >
            Aumentar punto
          </Button>
        </div>
      ))}

    </Container>
  );
};
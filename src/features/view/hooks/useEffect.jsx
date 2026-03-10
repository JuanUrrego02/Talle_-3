import { React, useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";

export const UseEffectCounter = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <Typography variant="h4">
        Hora: {time.toLocaleTimeString("es-CO")}
      </Typography>
    </Container>
  );
}
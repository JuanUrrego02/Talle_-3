import {React, useState} from "react";
import {Button, Container, Typography} from "@mui/material";

export const UseStateColor=()=>{
    const [color, setColor] = useState("red");
    return (
        <Container>
            <Typography variant="h4" sx={{ color: color }}>
                Color: {color}
            </Typography>
            <Button 
            type="button"
            onClick={() => setColor("blue")}
            >Blue</Button>
            <Button
            type="button"
            onClick={() => setColor("green")}
            >Green</Button>
            <Button
            type="button"
            onClick={() => setColor("red")}
            >Red</Button>
        </Container>
    )
}

    
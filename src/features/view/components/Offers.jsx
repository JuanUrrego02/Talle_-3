import React from "react";
import {UseStateColor} from "../hooks/useState";
import {UseEffectCounter} from "../hooks/useEffect";
import {UseContext} from "../hooks/useContext";
import {UseRefCounter} from "../hooks/useRef";
import {UseReducerScore} from "../hooks/useReducer";
import {UseOnline} from "../hooks/useOnline";

export const Offers = () => {
  return (
    <>
      <UseStateColor></UseStateColor>
      <UseEffectCounter></UseEffectCounter>
      <UseContext></UseContext>
      <UseRefCounter></UseRefCounter>
      <UseReducerScore></UseReducerScore>
      <UseOnline></UseOnline>
    </>
  )
}


import React from "react";
import {UseStateColor} from "../hooks/useState";
import {UseEffectCounter} from "../hooks/useEffect";
import {UseContext} from "../hooks/useContext";
import {UseRefCounter} from "../hooks/useRef";
import {UseReducerScore} from "../hooks/useReducer";
import {UseOnline} from "../hooks/useOnline";
import {UseCallbackExample} from "../hooks/useCallBacks";
import {UseMemoExample} from "../hooks/useMemo";
import { UseToggleExample } from "../hooks/useToggle";

export const Offers = () => {
  return (
    <>
      <UseStateColor></UseStateColor>
      <UseEffectCounter></UseEffectCounter>
      <UseContext></UseContext>
      <UseRefCounter></UseRefCounter>
      <UseReducerScore></UseReducerScore>
      <UseOnline></UseOnline>
      <UseCallbackExample></UseCallbackExample>
      <UseMemoExample></UseMemoExample>
      <UseToggleExample></UseToggleExample>
    </>
  )
}


"use client";

import { createContext, useContext } from "react";

export type CursorContextType = {
  size: number;
  changeSize: (value: number) => void;
  color: string;
  changeColor: (value: string) => void;
};

export const CursorContext = createContext<CursorContextType>({
  size: 20,
  changeSize: () => {},
  color: "white",
  changeColor: () => {}
});

export const useCursor = () => useContext(CursorContext);

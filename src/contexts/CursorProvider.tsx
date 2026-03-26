"use client";

import { PropsWithChildren, useState } from "react";
import { CursorContext } from "./CursorContext";

export function CursorProvider({ children }: PropsWithChildren) {
  const [size, setSize] = useState(30);
  const [color, setColor] = useState("white");

  const contextValue = {
    size,
    changeSize: (newValue: number) => {
      setSize(newValue);
    },
    color,
    changeColor: (newValue: string) => {
      setColor(newValue);
    }
  };

  return <CursorContext.Provider value={contextValue}>{children}</CursorContext.Provider>;
}

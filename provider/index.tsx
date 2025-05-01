"use client";
import React, { ComponentProps } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

const Provider = ({ children, ...rest }: ThemeProviderProps) => {
  return <NextThemesProvider {...rest}>{children}</NextThemesProvider>;
};

export default Provider;

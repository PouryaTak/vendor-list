"use client"
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/Global";
import { theme } from "@/styles/Theme";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

"use client";
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/Global";
import { theme } from "@/styles/Theme";
import StoreProvider from "@/store/provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StoreProvider>
  );
}

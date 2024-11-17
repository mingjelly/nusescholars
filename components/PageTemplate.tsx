"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Stack } from "@mui/material";

interface PageTemplateProps {
  children: React.ReactNode; // Allows any React content to be passed as children
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Navbar />
      <Stack component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Stack>
      <Footer />
    </Stack>
  );
};

export default PageTemplate;

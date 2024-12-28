"use client";
import React, { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

const Navbar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <AppBar
      position="sticky"
      color="default"
      sx={{ backgroundColor: "#CDCDCD" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link href="/" passHref>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              cursor: "pointer", // Add pointer cursor for better UX
              textDecoration: "none", // Prevent underlining
              color: "inherit", // Inherit the color from the theme
            }}
          >
            NUS DE-SCHOLARS
          </Typography>
        </Link>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {/* Use Link component for navigation */}
          <Link href="/about-us" passHref>
            <Button color="inherit">About Us</Button>
          </Link>
          <Link href="/humans-of-descholars" passHref>
            <Button color="inherit">Humans of De-Scholars</Button>
          </Link>
          <Link href="/events" passHref>
            <Button color="inherit">Events</Button>
          </Link>
          <Link href="/resources" passHref>
            <Button color="inherit">Resources</Button>
          </Link>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {showSearch && (
              <TextField
                size="small"
                variant="outlined"
                placeholder="Search..."
                autoFocus
                sx={{ width: "200px" }} // Adjust width as needed
              />
            )}
            <IconButton color="inherit" onClick={toggleSearch}>
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

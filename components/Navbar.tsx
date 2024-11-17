"use client";
import React, { useState } from "react";
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
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          NUS DE-SCHOLARS
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Humans of De-Scholars</Button>
          <Button color="inherit">Events</Button>
          <Button color="inherit">Resources</Button>
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

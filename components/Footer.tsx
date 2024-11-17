"use client";
import React from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "32px 16px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {/* Column 1: Navigation Links */}
      <Box sx={{ flex: "1 1 300px", marginBottom: "16px" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "16px" }}
        >
          NUS DE-SCHOLARS
        </Typography>
        <Typography sx={{ marginBottom: "8px", cursor: "pointer" }}>
          About Us
        </Typography>
        <Typography sx={{ marginBottom: "8px", cursor: "pointer" }}>
          Humans of De-Scholars
        </Typography>
        <Typography sx={{ marginBottom: "8px", cursor: "pointer" }}>
          Events
        </Typography>
        <Typography sx={{ marginBottom: "8px", cursor: "pointer" }}>
          Resources
        </Typography>
      </Box>

      {/* Column 2: Social Media */}
      <Box sx={{ flex: "1 1 300px", marginBottom: "16px" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "16px" }}
        >
          Connect with Us!
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <IconButton sx={{ color: "white" }} aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <Typography>nusdescholars...</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconButton sx={{ color: "white" }} aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
          <Typography>nusdescholars...</Typography>
        </Box>
      </Box>

      {/* Column 3: Newsletter */}
      <Box sx={{ flex: "1 1 300px", marginBottom: "16px" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "16px" }}
        >
          Email Newsletter
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            placeholder="Email"
            variant="outlined"
            size="small"
            sx={{
              flex: "1",
              backgroundColor: "white",
              borderRadius: "4px",
              marginRight: "8px",
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "black",
              "&:hover": { backgroundColor: "gray" },
            }}
          >
            &gt;
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

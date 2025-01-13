"use client";
import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
  const navLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Humans of De-Scholars", href: "/humans-of-descholars" },
    { label: "Events", href: "/events" },
    { label: "Resources", href: "/resources" },
  ];

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
      {/* Column 1: Logo and Navigation Links */}
      <Box sx={{ flex: "1 1 300px", marginBottom: "16px" }}>
        <Link href="/" passHref>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: "16px",
              cursor: "pointer",
              textDecoration: "none", // Remove underline
              color: "inherit", // Inherit text color
              "&:hover": { color: "gray" }, // Add hover effect
            }}
          >
            NUS DE-SCHOLARS
          </Typography>
        </Link>
        {navLinks.map((link) => (
          <Box key={link.label} sx={{ marginBottom: "8px" }}>
            <Link href={link.href} passHref>
              <Typography
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  "&:hover": { color: "gray" },
                }}
              >
                {link.label}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>

      {/* Column 2: Social Media Links */}
      <Box sx={{ flex: "1 1 300px", marginBottom: "16px" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "16px" }}
        >
          Connect with Us!
        </Typography>
          <Link href="https://www.linkedin.com/groups/12487572/" passHref>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <IconButton sx={{ color: "white" }} aria-label="Facebook">
            <LinkedInIcon />
          </IconButton>
            <Typography
                sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    "&:hover": { color: "gray" },
                }}
            >
                nusdescholars...
            </Typography>
        </Box>
              </Link>
        <Link href="https://www.instagram.com/nusescholars" passHref>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <IconButton sx={{ color: "white" }} aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
              <Typography
                  sx={{
                      cursor: "pointer",
                      textDecoration: "none",
                      "&:hover": { color: "gray" },
                  }}
              >
                  @nusescholars
              </Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;

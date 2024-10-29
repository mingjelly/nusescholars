import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const FullPageImage: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "url(/path/to/your/image.jpg)", // replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h2" // Choose an appropriate variant or customize the style
        sx={{
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background for readability
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        Welcome to the D-E Scholars Webpage!
      </Typography>
    </Box>
  );
};

export default FullPageImage;

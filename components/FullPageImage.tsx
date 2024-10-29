// components/FullPageImage.tsx
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

interface FullPageImageProps {
  imageUrl: string;
  text?: string; // Optional prop for overlay text
}

const FullPageImage: React.FC<FullPageImageProps> = ({ imageUrl, text }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {text && (
        <Typography
          variant="h2"
          sx={{
            position: "absolute",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "16px",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default FullPageImage;

"use client";

import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ConsentPopup: React.FC = () => {
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("analyticsConsent");
    if (consent === "true") {
      setIsConsentGiven(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem("analyticsConsent", "true");
    setIsConsentGiven(true);
  };

  if (isConsentGiven) {
    return null; // Do not show the popup if consent is already given.
  }

  return (
    <Modal
      open={!isConsentGiven}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      disableEscapeKeyDown
      onClose={() => {}}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          outline: "none",
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
          Analytics Notice
        </Typography>
        <Typography id="modal-description" sx={{ mb: 2 }}>
          This website uses analytics tools to improve your experience. By
          proceeding, you agree to allow us to collect data.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleConsent}
        >
          Got it!
        </Button>
      </Box>
    </Modal>
  );
};

export default ConsentPopup;

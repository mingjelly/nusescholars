import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div style={styles.hero}>
      <h1 style={styles.title}>About Us</h1>
    </div>
  );
};

const styles = {
  hero: {
    backgroundColor: "#d8d8d8",
    color: "#000000",
    textAlign: "center",
    padding: "50px 0",
  } as React.CSSProperties,
  title: {
    fontSize: "36px",
    fontWeight: "bold",
  } as React.CSSProperties,
};

export default HeroSection;

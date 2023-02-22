import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const FooterScore = () => {
  const score = useSelector((state) => state.score);

  return (
    <Navbar className="footer-container">
      <Container id="score-text-container">
        Score: {score}
        
      </Container>
    </Navbar>
  );
};

export default FooterScore;

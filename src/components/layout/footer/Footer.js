import React from "react";
import {FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import {faGithub,faLinkedin,faDiscord,faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <FooterLink href="https://github.com/Jeff-T-Schmidt" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
                <span style={{ marginLeft: "10px" }}>
                  GitHub
                </span>
         
            </FooterLink>
          </Column>
          <Column>
            <FooterLink href="https://www.linkedin.com/in/jeff-t-schmidt" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
                <span style={{ marginLeft: "10px" }}>
                  Linkedin
                </span>
            
            </FooterLink>
          </Column>
          <Column>
            <FooterLink href="https://discord.com/users/id/269991981541883907" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDiscord} />
                <span style={{ marginLeft: "10px" }}>
                  Discord
                </span>
    
            </FooterLink>
          </Column>
          <Column>
          <FooterLink href="https://www.youtube.com/c/WebDevSimplified" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
           
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
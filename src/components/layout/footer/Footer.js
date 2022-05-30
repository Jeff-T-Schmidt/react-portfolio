import React from "react";
import {FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import {faFacebook,faInstagram,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';
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
            <FooterLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
         
            </FooterLink>
          </Column>
          <Column>
            <FooterLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
            
            </FooterLink>
          </Column>
          <Column>
            <FooterLink href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
    
            </FooterLink>
          </Column>
          <Column>
          <FooterLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">
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
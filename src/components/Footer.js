import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Harsha a.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container style={{padding:30}}>
        <Row className="align-items-center">
          <Col size={20} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/harsha-srinivas-621b26199/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/harsha1010-art"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=harshasrinivas1010@gmail.com"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

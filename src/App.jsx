import "bootstrap/dist/css/bootstrap.min.css";
// =====================================================
import { useState } from 'react';
import './App.css'
// =====================================================
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
// =====================================================
function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <>
      <Container fluid className={`${isDarkMode ? "bg-dark" : "bg-light"} d-flex flex-column justify-content-center page-layout`}>
        <Row className="w-100">
          <Col className="col-12 d-flex justify-content-center">
            <p className={`fs-1 fw-bold ${isDarkMode ? "text-light" : "text-black-50"}`}>Theme Switcher</p>
          </Col>
        </Row>

        <Row className="w-100">
          <Col className="col-12 d-flex justify-content-center">
            <p className={`fs-5 fw-bold ${isDarkMode ? "text-light" : "text-black-50"}`}>{isDarkMode ? "Dark Theme" : "Light Theme"}</p>
          </Col>
        </Row>

        <Row className="w-100">
          <Col className="col-12 d-flex justify-content-center">
            <Button variant={`${isDarkMode ? "light" : "secondary"}`} onClick={() => setDarkMode(!isDarkMode)}>Switch Theme</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App

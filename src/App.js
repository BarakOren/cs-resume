import React from "react";
import styled from "styled-components";
import { createGlobalStyle, keyframes} from 'styled-components';
import Home from "./components/Home";
import Experience from "./components/Experience";
import { Routes, Route } from 'react-router';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 20px 20%;
    padding: 0;
    background: #151515;
    font-family: 'Montserrat', sans-serif;
    background-image: 
    radial-gradient(at 0% 0%,rgb(255,255,255,0.1) 0,transparent 50%)
    /* radial-gradient(at 50% 50%,hsla(255,255,255, 0) 0,transparent 50%) */
    /* radial-gradient(at 100% 0%,hsla(339,49%,30%,0) 0,transparent 20%) */
    ;
    min-height:100vh;
  }
`;


const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;



const Container = styled.div`
  padding: 50px 20px 20px 20px;
  width: 100%;
  height: 90vh;
  animation: ${fadeIn} 2s ease-in;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`


function App() {

  return (
    <Container>
        <GlobalStyle />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />

    </Routes>
        
    </Container>
  );
}

export default App;

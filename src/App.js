import React from "react";
import styled from "styled-components";
import { createGlobalStyle, keyframes} from 'styled-components';
import Home from "./components/Home";
import Experience from "./components/Experience";
import { Routes, Route } from 'react-router';
import Header from "./components/Header";
import Contact from "./components/Contact";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 20px 20%;
    padding: 0;
    background: #151515;
    font-family: 'Montserrat', sans-serif;
    background-image: 
    radial-gradient(at 0% 0%,rgb(255,255,255,0.3) 0,transparent 50%)
    ;
    background-repeat: no-repeat;
  }

  ::-webkit-scrollbar{
    width: 12px;
    height: 12px;
    background-color: #131313;
  }
  ::-webkit-scrollbar-thumb{
    background: rgb(68, 68, 68);
    border-radius: 6px ;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: #8e8d8f;
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
  min-height: 80vh;
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
        <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </Container>
  );
}

export default App;

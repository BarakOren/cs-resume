import React from "react";
import styled from "styled-components";
import { createGlobalStyle, keyframes} from 'styled-components';

// fonts
// font-family: 'Playfair Display', serif;


const GlobalStyle = createGlobalStyle`
  body {
    margin: 50px 20%;
    padding: 0;
    background: #151515;
    font-family: 'Montserrat', sans-serif;

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

const lightBall = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: -310px;
  left: -30px;
  // border-radius: 50%;
  // filter: blur(50px);
  background: white;
`

const Container = styled.div`
  padding: 20px;
  width: 100%;
  height: 100vh;
  animation: ${fadeIn} 2s ease-in;
  color: white;
`

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`

const Name = styled.h1`
  font-size: 100px;
  color: white;
  margin: 0;
  font-weight: 300;

`

const CS = styled.h1`
  font-size: 40px;
  color: white;
  font-weight: 300;

  margin-top: -10px;
`

const Summary = styled.p`
  font-size: 16px;
`

function App() {

  return (
    <Container>
        <GlobalStyle />
        <lightBall>ag</lightBall>

        <TitleContainer>
            <Name>Barak Oren.</Name>
            <CS>Customer Service Representative</CS>
        </TitleContainer>
        <Summary>
        Highly organized and diligent professional drawing upon ten years of experience in accounting and finance to contribute to smooth and productive operations. Collaborate cross-functionally across organizational levels to build consensus, track benchmark achievement, and troubleshoot emerging issues. 
        </Summary>
    </Container>
  );
}

export default App;

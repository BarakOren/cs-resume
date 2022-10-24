import styled from "styled-components"
import Button from "./Buttons"

const TitleContainer = styled.div`
text-align: center;
margin-bottom: 20px;
`

const Name = styled.h1`
font-size: 120px;
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
font-size: 18px;
transition: 0.2s all;
&:hover{
    transform: scale(1.1);
}
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin-top: 70px;
`

const Home = () => {
    return (<>
            <TitleContainer>
            <Name>Barak Oren.</Name>
            <CS>Customer Service Representative</CS>
            </TitleContainer>
            <Summary>
            Highly organized and diligent professional drawing upon ten years of experience in accounting and finance to contribute to smooth and productive operations. Collaborate cross-functionally across organizational levels to build consensus, track benchmark achievement, and troubleshoot emerging issues. 
            </Summary>
            <ButtonContainer>
            <Button name={"Experience"} goTo={"/experience"}/>
            <Button name={"Get In Touch"} goTo={"/"}/>
            </ButtonContainer>
            </>
    )
}

export default Home; 
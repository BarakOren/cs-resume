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
    cursor: default;
    transform: scale(1.1);
}
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-top: 30px;
`

const Home = () => {
    return (<>
            <TitleContainer>
            <Name>Barak Oren</Name>
            <CS>Customer Service Representative</CS>
            </TitleContainer>
            <Summary>
            Personable, patience and empathetic support representative with a keen eye for customer satisfaction, with over 3 years of experience assisting customers with big variety of different issues. Provided in-depth technical support to clients, Keeping an average of 85%-90% of customer satisfaction. Seeking to provide support to with the right team.  
            </Summary>
            <ButtonContainer>
            <Button name={"Experience"} goTo={"/experience"}/>
            <Button name={"Get In Touch"} goTo={"/"}/>
            </ButtonContainer>
            </>
    )
}

export default Home; 
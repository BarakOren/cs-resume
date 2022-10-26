import React, {useState} from "react";
import styled from "styled-components";
import {css, keyframes} from 'styled-components';
import {EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline'
import {Telephone} from '@styled-icons/bootstrap/Telephone'



const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const ItemsContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Name = styled.h1`
    font-size: 120px;
    color: white;
    margin: 0;
    font-weight: 300;
    margin-bottom: 50px;
`

const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; 
`

const Title = styled.p`
    font-size: 22px;
    color: white;
    transition: .2s all;

    &:hover {
        cursor: pointer;
        text-shadow: 0 0 3px rgb(255,255,255, 0.5);
    }
`

const EmailIcon = styled(EmailOutline)`
    color: white;
    width: 30px;
    margin-right: 12px;
`

const PhoneIcon = styled(Telephone)`
    color: white;
    width: 30px;
    margin-right: 12px;
`

const Fade = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

const Copied = styled.p`
    position: absolute;
    bottom: 10vh;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    color: white;
    font-weight: 300;
    text-shadow: 0 0 3px white;
    opacity: 0;
    animation: ${props =>
        props.clicked &&
        css`
          ${Fade} 2s ease-out
    `};
`

const MailMe = styled.button`
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    font-size: 20px;
    background: #262626;
    border: none;
    color: white;
    border-radius: 8px;
    transition: .2s all;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;


    &:hover{
        cursor: pointer;
        box-shadow: 0 0 20px rgb(255,255,255, 0.5);
    }
`

const Contact = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 2000)
    }

    return( 
        <Container>
            <Name>Contact</Name>
            <ItemsContainer>
            <MailMe onClick={() => {window.location = "barakoren5@gmail.com"}}>Mail Me</MailMe>
                <ItemContainer>
                    <EmailIcon />
                    <Title
                     onClick={() => {
                        navigator.clipboard.writeText("barakoren5@gmail.com");
                        handleClick()
                    }}
                    >barakoren5@gmail.com</Title>
                </ItemContainer>
                <ItemContainer>
                    <PhoneIcon />
                    <Title 
                    onClick={() => {
                        navigator.clipboard.writeText("+972548836668");
                        handleClick()
                    }}
                    >+972548836668</Title>
                </ItemContainer>
            </ItemsContainer>
            <Copied clicked={clicked}>Copied</Copied>
        </Container>
    )
}

export default Contact; 
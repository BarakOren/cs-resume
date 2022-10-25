import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

const LinkButton = styled(Link)`
    font-size: 16px;
    color: white;
    transition: .2s all;
    text-decoration: none;

    &:hover{
        cursor: pointer;
        text-shadow: 0 0 5px rgb(255,255,255, 0.5);
    }
`

const Header = () => {
    return (
        <Container>
            <LinkButton to="/">Home</LinkButton>
            <LinkButton to="/experience">Experience</LinkButton>
            <LinkButton to="/contact">Contact</LinkButton>
        </Container>
    )
}

export default Header;
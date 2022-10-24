import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom";

const ButtonStyle = styled(Link)`
    width: 200px;
    height: 50px;
    font-size: 20px;
    background: #262626;
    border: none;
    color: white;
    border-radius: 16px;
    transition: .2s all;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    &:hover{
        cursor: pointer;
        box-shadow: 0 0 20px rgb(255,255,255, 0.3);
    }
`

const Button = (props) => {
    const {name, goTo} = props;
    return (
        <ButtonStyle to={goTo}>{name}</ButtonStyle>
    )
}

export default Button;
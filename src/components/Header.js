import React from "react";
import styled from "styled-components"

const Container = styled.div`
    box-shadow : 0px 10px;
    background-color : #FFFFFF;
    color : #3D5A80;
    font-size : 64px;
    text-align : center;
`

function Header(){
    return (
        <Container>WEBPAGE NAME</Container>
    )
};

export default Header
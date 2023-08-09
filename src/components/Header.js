import React from "react";
import styled from "styled-components"

const Container = styled.div`
    background-color : blue;
    height : 50px;
    text-align : center;
`

function Header(){
    return (
        <Container>Title</Container>
    )
};

export default Header
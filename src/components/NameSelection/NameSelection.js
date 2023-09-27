import React from "react";
import styled from "styled-components";
import InputBox from "../Generic/InputBox/InputBox.js";

const Container = styled.div`
background-color : #3D5A80;
color: #FFFFFF;
text-align : center;
width : 250px;
margin : 20px;
padding : 10px;
border-radius : 5px;
`

function NameSelection() {
    return (
        <Container>
            <div>Event Name</div>
            <InputBox height={20} width={200} background={'#E0FBFC'} color={'#3D5A80'}/>
        </Container>
    )
}
export default NameSelection
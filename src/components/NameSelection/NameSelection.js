import React from "react";
import styled from "styled-components";
import InputBox from "../Generic/InputBox.js";

const Container = styled.div`
background-color : purple;
text-align : center;
width : 250px;
margin : 20px;
`

function NameSelection() {
    return (
        <Container>
            Event Name
            <InputBox/>
        </Container>
    )
}
export default NameSelection
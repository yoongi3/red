import React from "react";
import styled from "styled-components"
import TimeDropdown from "../Generic/TimeDropdown.js";

const MainContainer = styled.div`
background-color : green;
text-align : center;
width : 250px;
margin : 20px;
`
const Container = styled.div`
    display : flex;
    align-items : flex-start;
`


function TimeSelection() {
    return (
        <MainContainer>
            Choose Time
            <Container>
                <TimeDropdown label ={"start time"}/>
                <TimeDropdown/>
            </Container>
        </MainContainer>
    )
}
export default TimeSelection
import React from "react";
import styled from "styled-components"
import DateSelection from "./DateSelection/DateSelection.js";
import TimeSelection from "./TimeSelection/TimeSelection.js";
import NameSelection from "./NameSelection/NameSelection.js";

const MainContainer = styled.div`
    background-color : grey;
    align-self : none;
    text-align : center;
`
const Container = styled.div`
    display: flex;
    justify-content : center;
`

function NewEventContainer() {
    return (
        <MainContainer>
            New Event
            <Container>
                <NameSelection/>
                <TimeSelection/>
            </Container>
            <DateSelection/>
        </MainContainer>
    )
}

export default NewEventContainer
import React from "react";
import styled from "styled-components"
import DateSelection from "./DateSelection/DateSelection.js";
import TimeSelection from "./TimeSelection/TimeSelection.js";
import NameSelection from "./NameSelection/NameSelection.js";
import Button from "./Generic/ReusableButton/ReusableButton.js";

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
    const handleClick1 = () => {
        console.log("button 1")
    }
    const handleClick2 = () => {
        console.log("button 2")
    }

    return (
        <MainContainer>
            New Event
            <Container>
                <NameSelection/>
                <TimeSelection/>
            </Container>
            <DateSelection/>
            <Button onClick={handleClick1} style={{backgroundColor: 'blue', color: 'white'}}>
                Button 1
            </Button>
            <Button onClick={handleClick2} style={{backgroundColor: 'yellow', color: 'black'}}>
                Button 2
            </Button>
        </MainContainer>
    )
}

export default NewEventContainer
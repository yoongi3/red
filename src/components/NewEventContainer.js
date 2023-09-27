import React from "react";
import styled from "styled-components"
import DateSelection from "./DateSelection/DateSelection.js";
import TimeSelection from "./TimeSelection/TimeSelection.js";
import NameSelection from "./NameSelection/NameSelection.js";
import Button from "./Generic/ReusableButton/ReusableButton.js";

const MainContainer = styled.div`
    padding-top : 50px;
    align-self : none;
    text-align : center;
    font-size : 32px;
    color : #27374D;
`
const TopContainer = styled.div`
    display: flex;
    justify-content : center;
    font-size : 16px;
`
const BottomContainer = styled.div`
    padding : 10px;
    margin : 20px;
    background-color : #3D5A80;
    font-size : 16px;
    border-radius : 10px;
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
            <TopContainer>
                <NameSelection/>
                <TimeSelection/>
            </TopContainer>
            <BottomContainer>
                <DateSelection/>
                <Button onClick={handleClick1} style={{backgroundColor: '#EE6C4D', color: '#FFFFFF'}}>
                    create
                </Button>
            </BottomContainer>
            
        </MainContainer>
    )
}

export default NewEventContainer
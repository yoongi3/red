import React, { useEffect } from "react";
import styled from "styled-components"
import Dropdown from "../Generic/TimeDropdown.js";

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
    const timeDropdown = [
        {label : '12:00 AM', value : 0},
        {label : '1:00 AM', value : 1},
        {label : '2:00 AM', value : 2},
        {label : '3:00 AM', value : 3},
        {label : '4:00 AM', value : 4},
        {label : '5:00 AM', value : 5},
        {label : '6:00 AM', value : 6},
        {label : '7:00 AM', value : 7},
        {label : '8:00 AM', value : 8},
        {label : '9:00 AM', value : 9},
        {label : '10:00 AM', value : 10},
        {label : '11:00 AM', value : 11},
        {label : '12:00 PM', value : 12},
        {label : '13:00 PM', value : 13},
        {label : '14:00 PM', value : 14},
        {label : '15:00 PM', value : 15},
        {label : '16:00 PM', value : 16},
        {label : '17:00 PM', value : 17},
        {label : '18:00 PM', value : 18},
        {label : '19:00 PM', value : 19},
        {label : '20:00 PM', value : 20},
        {label : '21:00 PM', value : 21},
        {label : '22:00 PM', value : 22},
        {label : '23:00 PM', value : 23},
        {label : '12:00 AM', value : 24}
    ]

    const [value, setValue] = React.useState(0)
    const [value2, setValue2] = React.useState(0)

    // runs when [variable] is changed
    useEffect (() => {
        console.log(value)
    },[value])
    useEffect (() => {
        console.log(value2)
    },[value2])

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    }

    return (
        <MainContainer>
            Choose Time
            <Container>
                <Dropdown options={timeDropdown} value={value} handleValueSelect={handleChange}/>
                <Dropdown options={timeDropdown} value={value2} handleValueSelect={handleChange2}/>
            </Container>
        </MainContainer>
    )
}
export default TimeSelection
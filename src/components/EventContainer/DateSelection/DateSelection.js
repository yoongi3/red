import React from "react";
import styled from "styled-components"

const Container = styled.div`
color: #FFFFFF;
text-align : center;
margin 20px;
font-size : 16px;
`

function DateSelection() {
    return (
        <Container>
            Select Date Range
            <p>
                <input type="date"/>
                <input type="date"/>
            </p>
        </Container>
    )
}
export default DateSelection
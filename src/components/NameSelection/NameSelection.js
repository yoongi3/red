import React from "react";
import styled from "styled-components"

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
            <p>
                <input type="text"/>
            </p>
        </Container>
    )
}
export default NameSelection
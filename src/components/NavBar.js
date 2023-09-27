import React from "react";
import styled from "styled-components"

const Container = styled.div`
    background-color : #3D5A80;
    height : 100%;
    width : 200px;
    position : fixed;
    right : 0;
`

function NavBar() {
    return (
        <Container>
            nav bar
            <ul>
                <li>event1</li>
                <li>event2</li>
                <li>event3</li>
            </ul>  
        </Container>
    )
}

export default NavBar
import React from "react"
import Header from "../components/Header.js"
import NavBar from "../components/NavBar.js"
import styled from "styled-components"
import NewEventContainer from "../components/NewEventContainer.js"

const Container = styled.div`
display : flex;
justify-content : center;
`

function HomePage() {
    return (
        <>
            <Header/>
            <Container>
                <NewEventContainer/>
                <NavBar/>
            </Container>
        </> 
    )
}

export default HomePage
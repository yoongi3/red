import React from "react";
import styled from "styled-components";

const InputBox = ({ height, width, background, color}) =>{

    const Container = styled.input.attrs()`
    height:${height}px;
    width:${width}px;
    background:${background};
    color:${color};
    `

    return(
    <Container/>
    )
}

export default InputBox


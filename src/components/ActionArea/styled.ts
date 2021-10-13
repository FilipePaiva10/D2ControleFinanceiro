import styled from "styled-components";


export const Container = styled.div`
    background-color: ${props => props.theme.background.primary};
    box-shadow: 0px 0px 5px ${props => props.theme.shadow.primary};
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;
`
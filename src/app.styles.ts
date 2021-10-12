import styled from "styled-components";

export const Container = styled.div`
`;

export const Header = styled.div`
    background-color: ${props => props.theme.background.secundary};
    height: 150px;
    text-align: center;
    transition: all 1s ease 0s, transform 1s ease 0s;
`;

export const HeaderText = styled.h1`
    color: ${props => props.theme.colors.secundary};
    margin: 0;
    padding: 0;
    padding-top: 30px;
`;

export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;
`;
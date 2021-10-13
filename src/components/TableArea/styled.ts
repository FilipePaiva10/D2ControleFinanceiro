import styled from "styled-components";

export const table = styled.table`
    width: 100%;
    background-color: ${props => props.theme.background.primary};
    padding: 20px;
    box-shadow: 0px 0px 5px ${props => props.theme.shadow.primary};
    border-radius: 10px;
    margin-top: 20px;
`;

export const theadColumn = styled.th<{ width? : number}>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px 0;
    text-align: left;
    color: ${props => props.theme.colors.primary}
`;
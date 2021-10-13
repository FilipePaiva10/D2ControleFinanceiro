import styled from "styled-components";

export const TableLine = styled.tr`
    
`;

export const TableColumn = styled.td`
    padding: 10px 0;
    color: ${props => props.theme.colors.primary}
`

export const Category = styled.div<{ bgcolor: string }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.bgcolor};
`;


export const Value = styled.div<{ color: string }>`
    color: ${props => props.color};
`;
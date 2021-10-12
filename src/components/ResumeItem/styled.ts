import styled from "styled-components";


export const Container = styled.div`
    flex: 1;
    cursor: pointer;
`;

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    margin-bottom: 5px;
    color:  ${props => props.theme.colors.primary};
`;

export const Info = styled.div<{color?: string}>`
    text-align: center;
    font-weight: bold;
    color: ${props => props.color ?? props.theme.colors.primary};
`;  
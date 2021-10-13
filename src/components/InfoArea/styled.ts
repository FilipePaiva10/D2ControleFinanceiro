import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.background.primary};
    box-shadow: 0px 0px 5px ${props => props.theme.shadow.primary};
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;
`;

export const MonthArea  = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
    color: ${props => props.theme.colors.primary}
`;


export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`;
import styled from "styled-components";


export const Container = styled.div`
    background-color: ${props => props.theme.background.primary};
    box-shadow: 0px 0px 5px ${props => props.theme.shadow.primary};
    border-radius: 10px;
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;


export const AddItem = styled.div`
    width: 40px;    
    display: flex;
    align-items: center;

    svg {
        height: 30px;
        width: 30px;
        color: ${props => props.theme.background.secundary};
        cursor: pointer;
    }

`;


export const FilterItem = styled.select`
    flex: 1;
    outline: 0;
    border: 1px solid #CCC;
    border-radius: 5px;
    margin-right: 10px;
    padding-left: 10px;
    height: 40px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
`;


export const OptionItem = styled.option`

`;


export const SearchItem = styled.input`
    flex: 2;
    outline: 0;
    border: 1px solid #CCC;
    border-radius: 5px;
    padding-left: 10px;
    height: 40px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
`;
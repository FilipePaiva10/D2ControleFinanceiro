import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: showModal .8s linear;

    @keyframes showModal{
        from{
            background-color: rgba(0, 0, 0, 0);
        }
        to{
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
`;

export const Content = styled.div`
    background-color: ${props => props.theme.background.primary};
    border-radius: 10px;
    padding: 40px;
    max-width: 980px;
    box-shadow: 0px 0px 5px #CCC;
    z-index: 999;
    flex: 1;
    margin-top: -30px;
`;

export const Body = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 0.5fr;
    gap: 5px;
`;


export const CategoryArea = styled.div`
    flex: 1;
`;

export const CategoryTitle = styled.label`
    font-weight: bold;
    font-size: 18px;
    display: block;
    color: ${props=> props.theme.colors.primary};
`;

export const CategorySelect = styled.select<{category : string}>`
    width: 100%;
    padding: 10px;
    outline: 0;
    border: 2px solid ${props => props.category != '' ? '#28a745' : '#dc3545'};
    border-radius: 5px;
    margin-top: 5px;    
`;

export const CategoryOption = styled.option`

`;


export const TitleArea = styled.div`
    flex: 1;
`;

export const Title = styled.label`
    font-weight: bold;
    font-size: 18px;
    display: block;
    color: ${props=> props.theme.colors.primary}
`;


export const InputTitle = styled.input<{title: string}>`
    width: 100%;
    padding: 10px;
    outline: 0;
    border: 2px solid ${props => props.title != '' ? '#28a745' : '#dc3545'};
    border-radius: 5px;
    margin-top: 5px;
`;


export const ValueArea = styled.div`


`;


export const ValueText = styled.label`
    font-weight: bold;
    font-size: 18px;
    display: block;
    color: ${props=> props.theme.colors.primary}
`;


export const InputValue = styled.input<{price: number}>`
    width: 100%;
    padding: 10px;
    outline: 0;
    border: 2px solid ${props => props.price != 0 ? '#28a745' : '#dc3545'};;
    border-radius: 5px;
    margin-top: 5px;
`;


export const Footer = styled.div`
    display: inline-block;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;


export const BtnAdd = styled.button`
    margin-top: 10px;
    outline: 0;
    border: 0;
    background-color: green;
    color: #FFF;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
`;
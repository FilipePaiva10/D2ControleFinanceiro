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


export const Body = styled.div`
    background-color: ${props => props.theme.background.primary};
    border-radius: 10px;
    padding: 20px;
    width: 400px;
    height: 200px;
    z-index: 999;

`;
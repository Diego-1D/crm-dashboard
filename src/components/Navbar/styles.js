import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 4rem;
    padding: 0.5rem;
    background-color: #250BA2;
    display: none;

    @media screen and (max-width: 1150px){
        display: flex;
        justify-content: end;
        align-items: center;
    }
`;

export const Menu = styled.button`
    width: 50px;
    height: 50px;
    background-color: transparent;
    cursor: pointer;
    display: none;
    border-color: #FFF;

    @media screen and (max-width: 1150px){
        display: block;
    }
`;

export const Icon = styled.i`
    font-size: 1.8rem;
    color: #FFF;
`;
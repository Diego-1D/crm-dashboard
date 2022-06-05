import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 30px;
    gap: 2rem;
`;

export const Card = styled.div`
    width: 180px;
    height: 130px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    background-color: #FFF;
    padding: 20px;
    box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
    gap: 0.5rem;
`;

export const Icon = styled.i`
    font-size: 2.5rem;
    color: #7A90A3;

    @media screen and (max-width: 769px){
        font-size: 2rem;
    }
`;

export const Title = styled.h3`
    font-size: 1rem;
`;

export const Count = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    color: #7A90A3;
`;
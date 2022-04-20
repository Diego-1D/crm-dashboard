import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;

export const Card = styled.div`
    width: 200px;
    height: 130px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #FFF;
    padding: 20px;
    box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
`;

export const Icon = styled.i`
    font-size: 2.5rem;
    color: #7A90A3;
`;

export const Title = styled.h3`
    font-size: 1rem;
`;

export const Count = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    color: #7A90A3;
`;
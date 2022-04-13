import styled from "styled-components";

export const Card = styled.div`
    width: 180px;
    height: 110px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    padding: 20px;
    line-height: 0px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Icon = styled.i`
    font-size: 2.5rem;
`;

export const Name = styled.h3`
    font-size: 1rem;
`;

export const Value = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
`;
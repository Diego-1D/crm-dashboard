import styled from "styled-components";

export const TableArea = styled.table`
    width: 800px;
    background: #FFF;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
    padding: 15px;
    border-spacing: 0;
`;

export const Title = styled.h1`
    font-size: 1.4rem;
`;

export const Head = styled.thead`
    background-color: #D9DCFA;
`;

export const HeadTitle = styled.th`
    font-size: 1rem;
    padding: 10px 5px;
`;

export const Body = styled.tbody`

`;

export const Line = styled.tr`
    &:hover{
        background-color: pink;
    }
`;

export const Column = styled.td`
    text-align: center;
    padding: 10px 5px;
`;
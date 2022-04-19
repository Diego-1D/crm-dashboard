import styled from "styled-components";

export const Container = styled.div`

`;

export const Title = styled.h1`
    font-size: 1.4rem;
`;

export const Table = styled.table`
    width: 100%;
    background: #FFF;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
    padding: 10px 20px;
    margin-top: 30px;
    border-spacing: 0;
`;

export const Head = styled.thead`
    font-weight: bold;
`;

export const Body = styled.tbody`
`;

export const Line = styled.tr`
   &:hover{
        background-color: pink;
    }
`;

export const Column = styled.td`
    padding: 5px 0;
`;
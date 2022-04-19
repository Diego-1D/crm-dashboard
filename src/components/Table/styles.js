import styled from "styled-components";

export const TableArea = styled.table`
    width: 500px;
    background: #FFF;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
    padding: 10px 20px;
    margin-top: 30px;
    border-spacing: 0;
`;

export const Title = styled.h1`
    font-size: 1.4rem;
`;

export const Body = styled.tbody`
`;

export const Line = styled.tr`
   display: flex;
   justify-content: space-between;
   padding: 10px;
   border-radius: 2px;
      
    &:hover{
        background-color: pink;
    }
`;

export const Column = styled.td`
`;
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
    padding: 15px;
    margin-top: 30px;
    border-spacing: 0;
`;

export const Head = styled.thead`
    text-align: left;
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
      padding: 10px 5px;
`;

export const Pagination = styled.tfoot`
right: 50px;
    position: absolute;
    width: 500px;
    display: flex;
    justify-content: space-between;
`;

export const PaginationItem = styled.div`
    width: 20px;
    text-align: center;

    &:hover{
        background-color: pink;
        border-radius: 50%;
        cursor: pointer;
    }
`;
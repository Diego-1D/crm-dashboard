import styled from "styled-components";

export const Container = styled.div`
    padding: 40px 0px;
`;

export const Title = styled.h2`
    color: #261F5B;
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
    background-color:  #250BA2;
`;

export const HeadTitle = styled.th`
    font-size: 1rem;
    padding: 10px 5px;
    color: #FFF;
`;

export const Body = styled.tbody`
`;

export const Line = styled.tr`
   &:hover{
    background-color: #D9DCFA;
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
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.active ? "#D9DCFA" : "transparent"};
    border-radius: 50%;
    &:hover{
        background-color: #D9DCFA;
        cursor: pointer;
    }
`;
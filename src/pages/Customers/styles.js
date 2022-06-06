import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    padding: 40px 20px;
`;

export const Title = styled.h2`
    color: #261F5B;
`;

export const TableWrapper = styled.div`
    width: 100%;
    overflow-y: auto;
    background: #FFF;
    border-radius: 10px 10px 0 0;
    margin-top: 30px;
    padding: 0 15px;
`;

export const Table = styled.table`
    width: 100%;
    background: #FFF;
    padding-top: 15px;
    border-spacing: 0;

    @media screen and (max-width:926px){
     width: 850px;
    }
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

export const Pagination = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    padding: 0 20px;
    justify-content: flex-end;
    align-items: center;
    background-color: #FFF;
    border-radius: 0 0 10px 10px;
    gap: 1rem;
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
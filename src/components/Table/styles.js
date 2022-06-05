import styled from "styled-components";

export const TableWrapper = styled.div`
    width: 100%;
    overflow-y: auto;
    background: #FFF;
    border-radius: 10px;
    margin-bottom: 30px;
`;

export const TableArea = styled.table`
    width: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 15px;
    border-spacing: 0;

    @media screen and (max-width:550px){
     width: 480px;
    }
`;

export const Head = styled.thead`
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
    text-align: center;
    padding: 10px 5px;
`;
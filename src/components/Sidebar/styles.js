import styled from "styled-components";

export const Container = styled.div`
    width: 250px;
    height: 100vh;
    position: sticky;
    background-color: #3D36CA;
    padding: 40px 20px;
    box-shadow: rgba(149, 157, 165, 1) 3px 3px 30px;
`;

export const HeaderOptions = styled.div`
    padding: 15px 20px;
    display: flex;
    align-items: center;
    font-weight: 600;
    transition: color 0.3s ease 0s;
    cursor: pointer;
    color: white;
    border-radius: 5px;

    &:hover{
        color: #3D36CA;
        background-color: white;
    }
`;

export const Icon = styled.i`
    margin-right: 10px;
    font-size: 1.5rem;
`;

export const Title = styled.span`
text-transform: capitalize;
`;
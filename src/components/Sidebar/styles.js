import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 350px;
    height: 100vh;
    position: sticky;
    background-color: #250BA2;
    padding: 50px 20px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    
    @media screen and (max-width: 1150px){
        display:${({ isMenu }) => (isMenu ? '' : 'none')};
        position: fixed; 
        width: 300px;
    } 
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #D9DCFA;
    margin-bottom: 40px;
`;

export const Name = styled.h1`
    font-size: 1.4rem;
    color: #D9DCFA;
`;

export const HeaderOptions = styled(Link)`
    padding: 15px 20px;
    display: flex;
    align-items: center;
    font-weight: 600;
    transition: color 0.3s ease 0s;
    cursor: pointer;
    color: ${props => props.active ? "#3D36CA" : "#FFF"};
    border-radius: 5px;
    text-decoration: none;
    background-color: ${props => props.active ? "#FFF" : "transparent"};

    &:hover{
        color: #D9DCFA;
    }
`;

export const Icon = styled.i`
    margin-right: 10px;
    font-size: 1.5rem;
`;

export const Title = styled.span`
`;
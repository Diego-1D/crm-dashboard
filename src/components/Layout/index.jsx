import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { Container, Wrapper } from './styles';

const Layout = () => {
    return (
        <BrowserRouter>
            <Container>
                <Sidebar />
                <Wrapper>
                    <Navbar />
                    <Routes />
                </Wrapper>
            </Container>
        </BrowserRouter>
    )
}

export default Layout;
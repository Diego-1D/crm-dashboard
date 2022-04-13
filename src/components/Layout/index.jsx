import React from 'react';
import Dashboard from '../../pages/Dashboard';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { Container, Wrapper } from './styles';

const Layout = () => {
    return (
        <Container>
            <Sidebar />
            <Wrapper>
                <Navbar />
                <Dashboard />
            </Wrapper>
        </Container>
    )
}

export default Layout;
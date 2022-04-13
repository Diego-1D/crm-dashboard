import React from 'react';
import DashboardCard from '../../components/DashboardCard';
import {
    Container,
    Title,
    Wrapper
} from './styles';

const Dashboard = () => {
    return (
        <Container>
            <Title>Dashboard</Title>
            <Wrapper>
            <DashboardCard/>
            </Wrapper>
        </Container>
    )
}

export default Dashboard;

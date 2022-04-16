import React from 'react';
import DashboardCard from '../../components/DashboardCard';
import Table from '../../components/Table';
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
                <DashboardCard />                
            </Wrapper>
            <Table/>
        </Container>
    )
}

export default Dashboard;

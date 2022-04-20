import React from 'react';
import DashboardCard from '../../components/DashboardCard';
import Table from '../../components/Table';
import TableOrders from '../../components/TableOrders';
import {
    Container,
    Title,
} from './styles';

const Dashboard = () => {
    return (
        <Container>
            <Title>Dashboard</Title>
            <DashboardCard />
            <Title>Principais clientes</Title>
            <Table />
            <Title>Últimos pedidos</Title>
            <TableOrders />
        </Container>
    )
}

export default Dashboard;

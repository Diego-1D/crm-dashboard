import React from 'react';
import DashboardCard from '../../components/DashboardCard';
import Table from '../../components/Table';
import TableGrafic from '../../components/TableGrafic';
import TableOrders from '../../components/TableOrders';
import {
    Container,
    Title,
    Content,
    Wrapper
} from './styles';

const Dashboard = () => {
    return (
        <Container>
            <Title>Dashboard</Title>
            <DashboardCard />
            <Content>
                <Wrapper>
                    <Title>Principais clientes</Title>
                    <Table />
                </Wrapper>
                <Wrapper>
                    <Title>Totais de vendas</Title>
                    <TableGrafic />
                </Wrapper>
            </Content>
            <Title>Últimos pedidos</Title>
            <TableOrders />
        </Container>
    )
}

export default Dashboard;

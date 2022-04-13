import React from 'react';
import {
    Card,
    Icon,
    Name,
    Value
} from './styles';

const DashboardCard = () => {
    return (
        <>
            <Card>
                <Icon className='bx bx-shopping-bag'></Icon>
                <Name>Custo Total</Name>
                <Value>R$ 1.239,00</Value>
            </Card>
            <Card>
                <Icon className='bx bx-shopping-bag'></Icon>
                <Name>Custo Total</Name>
                <Value>R$ 1.239,00</Value>
            </Card>
            <Card>
                <Icon className='bx bx-shopping-bag'></Icon>
                <Name>Custo Total</Name>
                <Value>R$ 1.239,00</Value>
            </Card>
            <Card>
                <Icon className='bx bx-shopping-bag'></Icon>
                <Name>Custo Total</Name>
                <Value>R$ 1.239,00</Value>
            </Card>
        </>
    )
}

export default DashboardCard;
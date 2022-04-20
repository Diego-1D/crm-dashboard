import React from 'react';
import {
    Card,
    Icon,
    Title,
    Count, 
    Wrapper
} from './styles';

import CardItem from '../../data/status-card-data.json'

const DashboardCard = () => {
    return (
        <Wrapper>
            {CardItem.map((index, key) => (
                <Card key={key}>
                    <Icon className={index.icon}/>
                    <Title>{index.title}</Title>
                    <Count>{index.count}</Count>
                </Card>
            ))
            }
        </Wrapper>
    )
}

export default DashboardCard;
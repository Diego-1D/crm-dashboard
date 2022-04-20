import React from 'react';
import { Column, Line, TableArea, Body, Head, HeadTitle } from './styles';

import Latest_Orders from '../../data/latest_orders.json';

const TableOrders = () => {
  return (
    <TableArea>
      <Head>
        <HeadTitle style={{ textAlign: 'left' }}>Id do pedido</HeadTitle>
        <HeadTitle style={{ textAlign: 'left' }}>Cliente</HeadTitle>
        <HeadTitle>Preço Total</HeadTitle>
        <HeadTitle>Data</HeadTitle>
        <HeadTitle>Status</HeadTitle>
      </Head>
      <Body>
        {Latest_Orders.map((index, key) => (
          <Line key={key}>
            <Column style={{ textAlign: 'left' }}>{index.id}</Column>
            <Column style={{ textAlign: 'left' }}>{index.client}</Column>
            <Column>{index.price}</Column>
            <Column>{index.date}</Column>
            <Column>{index.status}</Column>
          </Line>
        ))
        }
      </Body>
    </TableArea>
  )
}

export default TableOrders;
import React from 'react';
import { Column, Line, TableArea, Body, Head, HeadTitle, TableWrapper } from './styles';

import TopCustomers from '../../data/top-customers.json';

const Table = () => {
  return (
    <TableWrapper>
      <TableArea>
        <Head>
          <HeadTitle style={{ textAlign: 'left' }}>Cliente</HeadTitle>
          <HeadTitle>Total de pedidos</HeadTitle>
          <HeadTitle>Total de gastos</HeadTitle>
        </Head>
        <Body>
          {TopCustomers.map((index, key) => (
            <Line key={key}>
              <Column style={{ textAlign: 'left' }}>{index.username}</Column>
              <Column>{index.order}</Column>
              <Column>{index.price}</Column>
            </Line>
          ))
          }
        </Body>
      </TableArea>
    </TableWrapper>
  )
}

export default Table;
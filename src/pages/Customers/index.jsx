import React, { useState } from 'react'
import {
  Body,
  Container,
  Table,
  Column,
  Line,
  Title,
  Head,
  HeadTitle,
  Pagination,
  PaginationItem
} from './styles';

import CustomersList from '../../data/customers-list.json';

const Customers = () => {

  let limit = '10';
  const initDataShow = CustomersList.slice(0, Number(limit));

  const [dataShow, setDataShow] = useState(initDataShow);
  const [nextPage, setNextPage] = useState(0);

  let pages = 1;
  let range = [];

  if (limit !== undefined) {
    let page = Math.floor(CustomersList.length / Number(limit));
    pages = CustomersList.length % Number(limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const selectPage = page => {
    const start = Number(limit) * page;
    const end = start + Number(limit);

    setDataShow(CustomersList.slice(start, end));

    setNextPage(page);
  }

  return (
    <Container>
      <Title>Clientes</Title>
      <Table>
        <Head>
          <HeadTitle>Id</HeadTitle>
          <HeadTitle>Nome</HeadTitle>
          <HeadTitle>E-mail</HeadTitle>
          <HeadTitle style={{ textAlign: 'center' }}>Telefone</HeadTitle>
          <HeadTitle style={{ textAlign: 'center' }}>Total de pedidos</HeadTitle>
          <HeadTitle style={{ textAlign: 'center' }}>Total gastos</HeadTitle>
          <HeadTitle style={{ textAlign: 'center' }}>Local</HeadTitle>
        </Head>
        <Body>
          {dataShow.map((index, key) => (
            <Line key={key}>
              <Column>{index.id}</Column>
              <Column>{index.name}</Column>
              <Column>{index.email}</Column>
              <Column style={{ textAlign: 'center' }}>{index.phone}</Column>
              <Column style={{ textAlign: 'center' }}>{index.total_orders}</Column>
              <Column style={{ textAlign: 'center' }}>{index.total_spend}</Column>
              <Column style={{ textAlign: 'center' }}>{index.location}</Column>
            </Line>
          ))
          }
        </Body>
        {
          pages > 1 ? (
            <Pagination>
              {
                range.map((item, key) => (
                  <PaginationItem 
                    key={key}
                    onClick={() => selectPage(key)}
                    active={nextPage == key}
                    >
                    {item + 1}
                  </PaginationItem>
                ))
              }

            </Pagination>
          ) : null
        }
      </Table>
    </Container>
  )
}

export default Customers;
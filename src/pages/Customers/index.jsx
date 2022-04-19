import React from 'react'
import {
  Body,
  Container,
  Table,
  Column,
  Line,
  Title,
  Head
} from './styles';

import CustomersList from '../../data/customers-list.json';

const Customers = () => {

  const head = [
    'Id',
    'Nome',
    'E-mail',
    'Telefone',
    'Total',
    'Total II',
    'Localização',
  ]
  return (
    <Container>
      <Title>Clientes</Title>
      <Table>
        <Head>
          {head.map((index, key) => (
            <Line key={key}>
              <Column>{index}</Column>
            </Line>
          ))
          }
        </Head>
        <Body>
          {CustomersList.map((index, key) => (
            <Line key={key}>
              <Column>{index.id}</Column>
              <Column>{index.name}</Column>
              <Column>{index.email}</Column>
              <Column>{index.phone}</Column>
              <Column>{index.total_orders}</Column>
              <Column>{index.total_spend}</Column>
              <Column>{index.location}</Column>
            </Line>
          ))
          }
        </Body>

      </Table>
    </Container>
  )
}

export default Customers;
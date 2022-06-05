import React, { useState } from 'react';
import {
  Container,
  Header,
  HeaderOptions,
  Icon,
  Name,
  Title
} from './styles';

import Items from '../../data/sidebar_routes.json';

const Sidebar = ({ isMenu }) => {

  const [selected, setSelected] = useState('Painel')

  return (
    <Container isMenu={isMenu}>
      <Header>
        <Icon
          className='bx bxs-store-alt'
          style={{ fontSize: '2.5rem' }}
        />
        <Name>CRM - Client</Name>
      </Header>
      {
        Items.map((item, index) => (
          <HeaderOptions
            to={item.route}
            key={index}
            onClick={() => setSelected(item.display_name)}
            active={selected === item.display_name}
          >
            <Icon className={item.icon} />
            <Title>{item.display_name}</Title>
          </HeaderOptions>
        ))
      }
    </Container>
  )
}

export default Sidebar;
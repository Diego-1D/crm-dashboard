import React from 'react';
import { Container, HeaderOptions, Icon, Title } from './styles';

import Items from '../../data/sidebar_routes.json';

const Sidebar = () => {


  return (
    <Container>
      {
        Items.map((item, index) => (
          <div key={index}>
            <HeaderOptions
            >
              {/* <Icon>{item.icon}</Icon> */}
              <Title>{item.display_name}</Title>
            </HeaderOptions>
          </div>
        ))
      }
    </Container>
  )
}

export default Sidebar;
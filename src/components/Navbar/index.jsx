import React, { useState } from 'react';
import {
  Container,
  Icon,
  Menu
} from './styles';

import Sidebar from '../Sidebar'

const Navbar = () => {

  const [isMenu, setIsMenu] = useState(false)

  const toggle = () => {
    setIsMenu(!isMenu)
  }

  return (
    <Container>
      <Menu onClick={toggle}> {
        isMenu ?
          <Icon className='bx bx-x' />
          :
          <Icon className='bx bx-menu' />
      }
      </Menu>
      <Sidebar isMenu={isMenu} onSelect={()=>setIsMenu(false)}/>
    </Container>
  )
}

export default Navbar;
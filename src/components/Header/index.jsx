import React, { useState } from 'react';
import {
    Container,
    Icon, Input,
    ImageIcon,
    Search,
    RightArea,
} from './styles';


const Header = () => {

    return (
        <Container>
            <RightArea>
                <Search>
                    <Icon className='bx bx-search'></Icon>
                    <Input type='text' placeholder='Digite aqui...' />
                </Search>
                <ImageIcon 
                src='https://avatars.githubusercontent.com/u/50786415?s=400&u=245c935a0c4567bc224f960be3efa86fcd8df10a&v=4' 
                alt='Perfil'/>
                <Icon style={{ fontSize: '2.2rem' }} className='bx bx-bell'></Icon>
            </RightArea>
        </Container>
    )
}

export default Header;
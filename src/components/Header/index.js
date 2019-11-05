import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Content, Logo, Cart, CartCount } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <Logo />
        <Cart>
          <CartCount />
          <Icon name="basket" size={25} color="#FFF" />
        </Cart>
      </Content>
    </Container>
  );
}

import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Content, Logo, Cart, CartCount } from './styles';

export default function Header() {
  return (
    <Container>
      <StatusBar barStyle="litgh-content" backgroundColor="#191920" />
      <Content>
        <Logo />
        <Cart>
          <CartCount>0</CartCount>
          <Icon name="shopping-basket" color="#fff" size={25} />
        </Cart>
      </Content>
    </Container>
  );
}

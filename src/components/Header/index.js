import React from 'react';
import { connect } from 'react-redux';
import { StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Content, Logo, Cart, CartCount } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <StatusBar barStyle="litgh-content" backgroundColor="#191920" />
      <Content>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Logo />
        </TouchableOpacity>
        <Cart onPress={() => navigation.navigate('Cart')}>
          <CartCount>{cartSize}</CartCount>
          <Icon name="shopping-basket" color="#fff" size={25} />
        </Cart>
      </Content>
    </Container>
  );
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);

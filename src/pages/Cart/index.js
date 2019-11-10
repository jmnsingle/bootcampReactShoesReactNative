import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Product,
  ProductItem,
  ProductImage,
  ProductDesc,
  ProductDelete,
  ProductTitle,
  ProductPrice,
  ProductDescAmount,
  ProductAmount,
  ProductRemove,
  ProductAdd,
  ProductAmountCount,
  ProductSubTotal,
  ProductSubTotalText,
  ProductTotal,
  ProductTotalText,
  ProductTotalResult,
  ProductButton,
  ProductButtonText,
} from './styles';

function Cart({ cart, navigation }) {
  console.log(cart);
  if (cart.length < 1) {
    return (
      <Container>
        <Product>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="remove-shopping-cart" size={100} color="#eee" />
            <ProductTotalText>Carrinho vazio !</ProductTotalText>
          </View>
        </Product>
      </Container>
    );
  }

  return (
    <Container>
      <Product>
        {cart.map(item => (
          <View key={String(item.id)}>
            <ProductItem>
              <ProductImage source={{ uri: item.image }} />
              <ProductDesc>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>R$ {item.price}</ProductPrice>
              </ProductDesc>
              <ProductDelete>
                <Icon name="delete-forever" size={30} color="#7159c1" />
              </ProductDelete>
            </ProductItem>

            <ProductDescAmount>
              <ProductAmount>
                <ProductRemove>
                  <Icon
                    name="remove-circle-outline"
                    size={25}
                    color="#7159c1"
                  />
                </ProductRemove>
                <ProductAmountCount>{item.amount}</ProductAmountCount>
                <ProductAdd>
                  <Icon name="add-circle-outline" size={25} color="#7159c1" />
                </ProductAdd>
              </ProductAmount>
              <ProductSubTotal>
                <ProductSubTotalText> R$ 129,00</ProductSubTotalText>
              </ProductSubTotal>
            </ProductDescAmount>
          </View>
        ))}

        <ProductTotal>
          <ProductTotalText>TOTAL</ProductTotalText>
          <ProductTotalResult>R$ 129,00</ProductTotalResult>
        </ProductTotal>
        <ProductButton>
          <ProductButtonText>FINALISAR PEDIDO</ProductButtonText>
        </ProductButton>
      </Product>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

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

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

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
        {cart.map(product => (
          <View key={String(product.id)}>
            <ProductItem>
              <ProductImage source={{ uri: product.image }} />
              <ProductDesc>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{formatPrice(product.price)}</ProductPrice>
              </ProductDesc>
              <ProductDelete onPress={() => removeFromCart(product.id)}>
                <Icon name="delete-forever" size={30} color="#7159c1" />
              </ProductDelete>
            </ProductItem>

            <ProductDescAmount>
              <ProductAmount>
                <ProductRemove onPress={() => decrement(product)}>
                  <Icon
                    name="remove-circle-outline"
                    size={25}
                    color="#7159c1"
                  />
                </ProductRemove>
                <ProductAmountCount>{product.amount}</ProductAmountCount>
                <ProductAdd onPress={() => increment(product)}>
                  <Icon name="add-circle-outline" size={25} color="#7159c1" />
                </ProductAdd>
              </ProductAmount>
              <ProductSubTotal>
                <ProductSubTotalText> {product.subTotal}</ProductSubTotalText>
              </ProductSubTotal>
            </ProductDescAmount>
          </View>
        ))}

        <ProductTotal>
          <ProductTotalText>TOTAL</ProductTotalText>
          <ProductTotalResult>{total}</ProductTotalResult>
        </ProductTotal>
        <ProductButton>
          <ProductButtonText>FINALISAR PEDIDO</ProductButtonText>
        </ProductButton>
      </Product>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductButton,
  ProductStock,
  ProductTextButton,
  ProductDesc,
  ProductButtonDesc,
  ProductStockContent,
} from './styles';

function Home({ addToCartRequest, navigation, amount }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    getProducts();
  }, []);

  function handleAddProduct(id) {
    addToCartRequest(id);

    navigation.navigate('Cart');
  }

  function handleProduct({ item }) {
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductDesc>
          <ProductTitle>{item.title}</ProductTitle>
          <ProductPrice>{item.priceFormatted}</ProductPrice>
        </ProductDesc>
        <ProductButton onPress={() => handleAddProduct(item.id)}>
          <ProductStockContent>
            <Icon name="local-grocery-store" color="#fff" size={25} />
            <ProductStock>{amount[item.id] || 0}</ProductStock>
          </ProductStockContent>
          <ProductButtonDesc>
            <ProductTextButton>Adicionar ao carrinho</ProductTextButton>
          </ProductButtonDesc>
        </ProductButton>
      </Product>
    );
  }

  return (
    <Container>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={products}
          horizontal
          keyExtractor={item => String(item.id)}
          renderItem={item => handleProduct(item)}
        />
      </View>
    </Container>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

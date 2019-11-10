import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Container } from './styles';

import api from '../../services/api';
import logo from '../../assets/images/logo.png';

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

class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');

    this.setState({ products: response.data });
  };

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  handleProduct = ({ item }) => {
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductDesc>
          <ProductTitle>{item.title}</ProductTitle>
          <ProductPrice>{item.price}</ProductPrice>
        </ProductDesc>
        <ProductButton onPress={() => this.handleAddProduct(item)}>
          <ProductStockContent>
            <Icon name="local-grocery-store" color="#fff" size={25} />
            <ProductStock>{item.amount}</ProductStock>
          </ProductStockContent>
          <ProductButtonDesc>
            <ProductTextButton>Adicionar ao carrinho</ProductTextButton>
          </ProductButtonDesc>
        </ProductButton>
      </Product>
    );
  };

  // handleProduct = () => {
  //  this.props.navigation.navigate('Cart');
  // };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={products}
            horizontal
            keyExtractor={item => String(item.id)}
            renderItem={this.handleProduct}
          />
        </View>
      </Container>
    );
  }
}

export default connect()(Home);

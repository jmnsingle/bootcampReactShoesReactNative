import React, { Component } from 'react';
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

class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  };

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);

    this.props.navigation.navigate('Cart');
  };

  handleProduct = ({ item }) => {
    const { amount } = this.props;

    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductDesc>
          <ProductTitle>{item.title}</ProductTitle>
          <ProductPrice>{item.priceFormatted}</ProductPrice>
        </ProductDesc>
        <ProductButton onPress={() => this.handleAddProduct(item.id)}>
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

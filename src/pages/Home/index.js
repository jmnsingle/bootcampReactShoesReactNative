import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
} from './styles';

export default function Home() {
  return (
    <Container>
      <Product>
        <ProductImage />
        <ProductTitle />
        <ProductPrice />
        <ProductButton>
          <Icon name="local-grocery-store" color="#fff" size={25} />
          <ProductStock />
          <ProductTextButton />
        </ProductButton>
      </Product>
    </Container>
  );
}

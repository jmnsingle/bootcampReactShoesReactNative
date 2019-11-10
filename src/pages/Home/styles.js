import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  background: #1e1e24;
`;

export const Product = styled.View`
  background: #fff;
  width: 300px;
  height: 375px;
  margin: 10px 44px;
  padding: 15px;
  border-radius: 5px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  align-self: stretch;
  height: 200px;
  padding: 10px;
`;

export const ProductDesc = styled.View`
  justify-content: center;
  padding: 10px 0;
`;
export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 18px;
  font-weight: bold;
  height: 50px;
`;

export const ProductPrice = styled.Text`
  font-size: 14px;
`;

export const ProductButton = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  height: 55px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 5px;
`;

export const ProductButtonDesc = styled.View`
  flex: 1;
  width: 40px;
  align-items: center;
`;

export const ProductStock = styled.Text`
  font-size: 18px;

  padding: 0 0 0 5px;
  color: #fff;
`;

export const ProductStockContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  padding: 10px;
  background: rgba(0, 0, 0, 0.1);
`;

export const ProductTextButton = styled.Text`
  font-size: 18px;
  color: #fff;
`;

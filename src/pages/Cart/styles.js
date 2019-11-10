import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #1e1e24;
`;

export const Product = styled.View`
  background: #fff;
  border-radius: 5px;
  align-self: stretch;
  margin: 10px 20px;
  padding: 10px;
`;

export const ProductItem = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const ProductImage = styled.Image.attrs({
  resizedMode: 'cover',
})`
  width: 80px;
  height: 80px;
  padding: 10px;
`;

export const ProductDesc = styled.View`
  flex: 1;
  padding: 10px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16;
  font-weight: bold;
`;

export const ProductPrice = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0 0 0;
`;

export const ProductDelete = styled.TouchableOpacity``;

export const ProductDescAmount = styled.View`
  background: #fafafa;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin: 2px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  width: 80px;
  justify-content: space-between;
  align-items: center;
`;

export const ProductRemove = styled.TouchableOpacity``;

export const ProductAdd = styled.TouchableOpacity``;

export const ProductAmountCount = styled.Text`
  background: #fff;
  width: 60px;
  margin: 0 5px;
  padding: 4px 0;
  border-radius: 5px;
  text-align: center;
`;

export const ProductSubTotal = styled.View`
  justify-content: center;
`;

export const ProductSubTotalText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ProductTotal = styled.View`
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const ProductTotalText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #c4c3c2;
  padding: 5px 0;
`;

export const ProductTotalResult = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const ProductButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  align-self: stretch;
  margin: 5px 0px;
  border-radius: 5px;
  background: #7159c1;
  height: 55px;
`;

export const ProductButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

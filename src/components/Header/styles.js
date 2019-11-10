import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Container = styled.SafeAreaView`
  height: 55px;
  background: #191920;
  flex-direction: row;
`;

export const Content = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  padding: 20px;
  background: #191920;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const Cart = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const CartCount = styled.Text`
  position: absolute;
  z-index: 1;
  right: -10;
  top: -10;
  color: #fff;
  background: #7159c1;
  width: 18px;
  border-radius: 9px;
  text-align: center;
`;

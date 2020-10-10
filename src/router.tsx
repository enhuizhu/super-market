import React from 'react';
import Home from './pages/home/Home';
import Basket from './pages/basket/Basket';
import { Badge } from '@material-ui/core';
import { connect } from 'react-redux';

const BasketLabel = (props: any) => {
  return (<Badge badgeContent={props.productsInBasket.length} color="secondary" style={{top: -2}}>
    Basket
  </Badge>)
};

const BasketLabelContainer = connect((state: any) => ({
  productsInBasket: state.productsInBasket,
}))(BasketLabel);


export const routes = [
  {
    label: 'Home',
    url: '/',
    component: Home,
  },
  {
    label: BasketLabelContainer,
    url: '/basket',
    component: Basket,
  }
];


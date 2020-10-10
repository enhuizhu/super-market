import React, { FC } from 'react';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';
import { Product } from '../../interfaces/product.interface';
import { makeStyles, Theme} from '@material-ui/core/styles';
import { formatPrice } from '../../utils/app.util';

interface ProductCardPros {
  product: Product,
  onAddToBasket: Function,
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 150,
    margin: 20,
  },
  productName: {
    fontWeight: 'bold',
  },
  content: {
    minHeight: 53,
  },
  productPrice: {
    '& label': {
      marginRight: 5,
    },
    '& .price': {
      color: theme.palette.secondary.main,
      fontSize: 16,
    }
  }
}));

export const ProductCard: FC<ProductCardPros> = ({
  product,
  onAddToBasket,
}) => {
  const classes = useStyles();
  
  return <Card className={classes.root}>
    <CardContent className={classes.content}>
      <div className={classes.productName}>{product.name}</div>
      <div className={classes.productPrice}>
        <label>Price:</label>
        <span className='price'>
          { formatPrice(product.price)}
          {product.unit ? `/${product.unit}` : ''}
        </span>
      </div>
      {product.policyDescription && <div className='bold'>{ product.policyDescription}</div>} 
    </CardContent>
    <CardActions>
      <Button color="primary" onClick={() => {
        onAddToBasket({...product});
      }}>Add To Basket</Button>
    </CardActions>
  </Card>
}

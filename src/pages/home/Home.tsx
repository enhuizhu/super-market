import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Theme} from '@material-ui/core/styles';
import { ProductCard } from '../../components/product-card/ProductCard';
import { Product } from '../../interfaces/product.interface';
import { addToBasket } from '../../store/actions/';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  }
}));

export const Home = (props: any) => {
  const classes = useStyles();
  const { products, addToBasket } = props;

  return <div className={classes.root}>
    { products.map((p: Product) => (
      <ProductCard product={p} onAddToBasket={addToBasket}></ProductCard>
    ))}
  </div>;
};

const mapStateToProps = (state: any) => ({
  products: state.products,
});

const mapActionToProps = (dispatch: any) => {
  return {
    addToBasket: (product: Product) => {
      dispatch(addToBasket(product));
    }
  }
};

export default connect(mapStateToProps, mapActionToProps)(Home);

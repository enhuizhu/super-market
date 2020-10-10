import React from 'react';
import { Card, CardContent, Divider } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Product } from '../../interfaces/product.interface';
import { formatPrice, getTotalAndSavings } from '../../utils/app.util';
import { addToBasket } from '../../store/actions';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },

  card: {
    width: '95vw',
    maxWidth: 600,
    marginTop: 20,
  },

  item: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  itemInfo: {
    display: 'flex',
    justifyContent: 'flex-start',
    '& span': {
      marginRight: 20,

      '& input': {
        width: 50,
      }
    }
  },

  subTotal: {
    textAlign: 'right',
  },

  totalToPay: {
    marginTop: 20,
  }


}));

export const Basket = ({ products, addToBasket }: any) => {
  const classes = useStyles();
  const savings: any[] = [];
  let originalSum = 0;
  let finalSum = 0;
  let totalSave = 0;

  if (products.length === 0) {
    return <div>Please add product first!</div>
  }

  return <div className={classes.root}>
    <Card className={classes.card}>
      <CardContent>
        {
          products.map((p: Product) => {
            const totalAndSavedCost = getTotalAndSavings(p);
            const total = p.price * (p.quantity || 0);
            
            originalSum += total;
            finalSum += totalAndSavedCost.total;
            totalSave += totalAndSavedCost.savedCost;

            if (totalAndSavedCost.savedCost > 0) {
              savings.push({
                description: `${p.name} ${p.policyDescription}`,
                savedCost: totalAndSavedCost.savedCost,
              });
            }
            return <div className={classes.item}>
              <div className={classes.itemInfo}>
                <span>{p.name} &nbsp; {formatPrice(p.price)}</span> 
                <span>x</span>
                <span>
                  <input type='number' value={p.quantity} onChange={(e) => {
                    addToBasket({
                      ...p,
                      quantity: e.target.value,
                    })
                  }}/>
                  {p.unit ? p.unit : ''}
                </span>
              </div>
              
              <div>
                {formatPrice(total)}
              </div>
            </div>;
          })
        }

        <div className={classes.subTotal}>
          Sub Total: {formatPrice(originalSum)}
        </div>

        {
          savings.length > 0 && (
            <div>
              <h4>Savings</h4>
              {
                savings.map((saving: any) => {
                  return <div className={classes.item}>
                    <div className={classes.itemInfo}>
                      <span>{saving.description}</span>
                    </div>
                    <div>
                      -{formatPrice(saving.savedCost)}
                    </div>
                  </div>
                })
              }
              <div className={classes.subTotal}>
                Total Savings: -{formatPrice(totalSave)}
              </div>
            </div>
          )
        }
        <br></br>
        <Divider></Divider>
        <div className={`${classes.subTotal} ${classes.totalToPay}`}>
          Total to Pay {formatPrice(finalSum)}
        </div>
      </CardContent>
    </Card>
  </div>
};

const mapStateToProps = (state: any) => ({
  products: state.productsInBasket,
});

const mapActionToProps = (dispatch: any) => ({
  addToBasket: (p: Product) => {
    dispatch(addToBasket(p))
  },
});

export default connect(mapStateToProps, mapActionToProps)(Basket);
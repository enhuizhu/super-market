import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../router';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 16,
    background: theme.palette.primary.main,
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
  },
  siteTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  navigation: {
    fontSize: 14,

    '& a': {
      color: 'white',
      textDecoration: 'none',
      marginRight: 10,
    }
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (<div className={classes.root}>
    <div className={classes.siteTitle}>Super Market</div>
    <div className={classes.navigation}>
      {routes.map(route => (<Link to={route.url}>{typeof route.label === 'string' ?
        route.label : <route.label/>
      }</Link>))}
    </div>
  </div>);
};

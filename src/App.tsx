import React from 'react';
import { makeStyles, Theme} from '@material-ui/core/styles';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './router';
import { Header } from './components/header/Header';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <Header></Header>
        <Switch>
          {
            routes.map(route => (<Route 
              path={route.url}
              key={route.url} 
              component={route.component}
              exact
            >
            </Route>))
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;

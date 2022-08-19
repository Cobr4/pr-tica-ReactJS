import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Routes from './routes';
import { Container, makeStyles } from '@material-ui/core/';
import Header from './components/Header';

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundColor: '#33FFE3',
  }
}));

const App = () => {
  
  const classes = useStyles();

  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))
  
  if(localCart !== null) {
    store.dispatch({type: 'CHANGE_CART', localCart})
  }
  
  return(
    <Provider store={store}>
      <Container maxWidth="xl" className={classes.page}>
        <Router>
          <Header />
          <Routes />
        </Router>
      </Container> 
    </Provider>
  )
}

export default App;

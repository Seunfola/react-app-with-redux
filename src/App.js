
import './App.css';
import Cart from './component/cart';
import store from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store ={store}>
      <>
     
      <Cart/>
      </>
    </Provider>
  
  );
}

export default App;

import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import { getCartdb, setProducts } from './Database/database';

function App() {
  setProducts();
  getCartdb();
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;

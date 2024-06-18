import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import { setProducts } from './Database/database';

function App() {
  setProducts();
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;

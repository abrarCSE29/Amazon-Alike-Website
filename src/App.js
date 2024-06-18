import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop_/Shop';

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;

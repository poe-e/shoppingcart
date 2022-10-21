import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './components/Catalog'
import HomePage from './components/HomePage';

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/shoppingcart/" element={<HomePage />} />
        <Route path="/shoppingcart/catalog" element={<Catalog />}/>
        <Route path="/shoppingcart/catalog/:categoryId" element={<Catalog />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

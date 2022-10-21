import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Catalog from './components/Catalog'
import HomePage from './components/HomePage';

const App = () =>{
  return(
    <HashRouter basename='shoppingcart'>
      <Routes>
        <Route exact path="/#/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />}/>
        <Route path="/catalog/:categoryId" element={<Catalog />}/>
      </Routes>
    </HashRouter>
  )
}

export default App;

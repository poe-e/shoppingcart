import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './components/Catalog'
import HomePage from './components/HomePage';

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="catalog" element={<Catalog />}/>
        <Route path="catalog/:categoryId" element={<Catalog />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

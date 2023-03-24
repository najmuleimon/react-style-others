import { useEffect } from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MyCounter from './components/counter/MyCounter';
import Home from './components/Home/Home';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import PaginatedItems from './components/Paginate/PaginatedItems';
import Products from './components/Products/Products';
import Range from './components/Range/Range';
import Select from './components/Select/Select';
import Shop from './components/Shop/Shop';
import ProductsTable from './components/table/ProductsTable';
import ThemePlay from './components/ThemePlay/ThemePlay';
import Todo from './components/Todo/Todo';
import { GlobalStyles } from './GlobalStyle.style';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      await new Promise(res => setTimeout(res, 1000))
      setLoading(false);
    };
    fetch();
  },[]);
  return (
    <div>
      <GlobalStyles/>
      <Navbar/>
      {loading && <Loader/>}
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/counter" element={<MyCounter/>}/>
        <Route path="/theme" element={<ThemePlay/>}/>
        <Route path="/select" element={<Select/>}/>
        <Route path="/range" element={<Range/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/paginate" element={<PaginatedItems/>}/>
        <Route path="/table" element={<ProductsTable/>}/>
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
    </div>
  );
}

export default App;

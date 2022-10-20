import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import Cart from './Cart'
import './products.css'
import ProductTile from './ProductTile';
import data from '../data/products.json'
import React, { useState } from 'react';

const Catalog = (props) => {

    const [toggle, setToggle] = useState(false);

    const textStyling = {
        color: 'black',
      }
    let filteredData;
    let { categoryId } = useParams();
    if(categoryId === undefined) categoryId = 'All Products'; filteredData = data.products;
    if(categoryId === 'graphicsCards') {
        categoryId = 'GPUs'
        filteredData = data.products.filter(item => item.type === 'gpu')
    }
    if(categoryId === 'processors'){
        categoryId = 'Processors'
        filteredData = data.products.filter(item => item.type === 'cpu')
    }
    if(categoryId === 'memory'){
        categoryId = 'Memory'
        filteredData = data.products.filter(item => item.type === 'memory')
    }

    function toggleCart(){
        setToggle(!toggle);
        // console.log(toggle)
    }

    return(
        <div className='shopcartContent'>
            {/* {toggle && <Cart toggleCart={toggleCart}/>} */}
            <Cart toggleCart={toggleCart} isOpen={toggle}/>
            <NavBar textColor={textStyling} toggleCart={toggleCart}/>
            <div className='shopPage'>
                <div className='shopPage_side'>
                    <div>
                        <p style={{fontSize: '2.5vw'}}>Shop/</p>
                        <p style={{fontSize: '1.2vw'}}>{categoryId}</p>
                        {/* <div style={{fontSize: '40px'}}>
                            All Products
                        </div> */}
                    </div>
                    <div>
                        <ul>
                            <a href='/catalog'>All</a>
                            <a href='/catalog/processors'>Processors</a>
                            <a href='/catalog/graphicsCards'>GPUs</a>
                            <a href='/catalog/memory'>Memory</a>
                        </ul>
                    </div>
                </div>
            <div className='shopPage_main'>
                    {filteredData.map((item) => (
                        <ProductTile item={item} key={item.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Catalog;
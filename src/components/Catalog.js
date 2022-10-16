import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import Cart from './Cart'
import './products.css'
import ProductTile from './ProductTile';
import data from '../data/products.json'

const Catalog = (props) => {


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

    return(
        <div className='shopcartContent'>
            <NavBar textColor={textStyling}/>
            <Cart />
            <div className='shopPage'>
                <div className='shopPage_side'>
                    <div>
                        <p style={{fontSize: '40px'}}>Shop/</p>
                        <p style={{fontSize: '22px'}}>{categoryId}</p>
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
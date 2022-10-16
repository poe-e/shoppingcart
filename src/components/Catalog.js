import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import './products.css'
import ProductTile from './ProductTile';

const Catalog = (props) => {
    const textStyling = {
        color: 'black',
      }
    let { categoryId } = useParams();
    if(categoryId === undefined) categoryId = 'All Products'
    if(categoryId === 'graphicsCards') categoryId = 'GPUs'
    if(categoryId === 'processors') categoryId = 'Processors'

    return(
        <div className='shopcartContent'>
            <NavBar textColor={textStyling}/>
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
                            <a href='/catalog/processors'>Processors</a>
                            <a href='/catalog/graphicsCards'>GPUs</a>
                        </ul>
                    </div>
                </div>
                <div className='shopPage_main'>
                        <ProductTile />
                        <ProductTile />
                        <ProductTile />
                        <ProductTile />
                        <ProductTile />
                        <ProductTile />
                        <ProductTile />
                </div>
            </div>
        </div>
    )
}

export default Catalog;
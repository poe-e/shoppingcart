import './ProductTile.css'
import image from '../images/ryzen-5600X.png';

const ProductTile = () =>{



    return(
    <div className="card">
        <div className="card-image">
            <img src={image} alt='Amd Processor'/>
        </div>
        <div className="card-content">
            <p className="title product-title">Ryzen 5600X</p>
            <p style={{fontSize:'20px'}}>$500.00</p>
        </div>
    </div>
    )
}

export default ProductTile;
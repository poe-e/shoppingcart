import './ProductTile.css'

const ProductTile = (props) =>{


    let source = props.item.imgPath;

    return(
    <div className="card">
        <div className="card-image">
            <img src={source} alt='Amd Processor'/>
        </div>
        <div className="card-content">
            <p className="title product-title">{props.item.name}</p>
            <p style={{fontSize:'20px'}}>{props.item.price}</p>
            <button className='addToCart'>Add to Cart</button>
        </div>
    </div>
    )
}

export default ProductTile;
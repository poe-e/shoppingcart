import './cart.css'

const Cart = (props) => {

    let backDrop;
    let cart;
    if(props.isOpen){
        backDrop = 'cartBackDrop-open'
        cart = 'cart-open'
    }
    else{
        backDrop = 'cartBackDrop-close'
        cart = 'cart-close'
    }

    return(
        <div>
            <div className={backDrop} onClick={props.toggleCart}></div>
            <div className={cart}>
                <div>
                    <h2 id='cartHeader' >Your Cart</h2>
                    <p id='cartEmpty'>Your cart is empty</p>
                </div>
                <a href="#0" className="checkout-btn">Checkout</a>
            </div> 
        </div>
    )
}

export default Cart;
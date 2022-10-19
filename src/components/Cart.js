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
                <h2>Cart</h2>

                <div className="cd-cart-total">
                    <p>Total <span>$39.96</span></p>
                </div> 

                <a href="#0" className="checkout-btn">Checkout</a>
            </div> 
        </div>
    )
}

export default Cart;
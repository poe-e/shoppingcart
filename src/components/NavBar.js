import './navbar.css'
import { Link } from 'react-router-dom';

const NavBar = (props) => {

    return(
        <header className='mainPageHeader'>
            <Link to='/' className='frontPage-nav' style={props.textColor}>Home</Link>
            {/* <a className='frontPage-nav' href='/#/shoppingcart/' style={props.textColor}>Home</a> */}
                <nav className='navBar'>
                    <Link to='/catalog' className='frontPage-nav' style={props.textColor}>Shop</Link>
                    {/* <a className='frontPage-nav' href='/catalog' style={props.textColor}>Shop</a> */}
                    <button id='cartButton' style={props.textColor} onClick={props.toggleCart}>Cart</button>
                </nav>
      </header>
    )
}

export default NavBar;
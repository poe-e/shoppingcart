import './navbar.css'

const NavBar = (props) => {
    return(
        <header className='mainPageHeader'>
            <a href='/' style={props.textColor}>Home</a>
                <nav className='navBar'>
                    <a href='/catalog' style={props.textColor}>Shop</a>
                    <button id='cartButton' style={props.textColor} onClick={props.toggleCart}>Cart</button>
                </nav>
      </header>
    )
}

export default NavBar;
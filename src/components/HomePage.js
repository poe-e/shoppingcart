import image from '../images/rtx4090.jpg';
import NavBar from './NavBar';
import Cart from './Cart';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {

  const textStyling = {
    color: 'whitesmoke',
  }

    return(
      <div>
        <Cart/>
        <div className='background' style={{backgroundImage: `url(${image})`}}>
            <NavBar textColor = {textStyling} textSize={'2vw'}/>
            <div className='mainText'>
              <h1>Nvidia RTX 4090</h1>
              <p style={{color:'whitesmoke'}}>The next big thing, get yours before the scalpers!</p>
              <Link className='buy-now' to='/catalog'>Buy Now</Link>
              {/* <a href='/shoppingcart/catalog' className='buy-now'>Buy Now</a> */}
            </div>
        </div>
      </div>
    )
}

export default HomePage;
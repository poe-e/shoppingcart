import image from '../images/rtx4090.jpg';
import NavBar from './NavBar';
import './HomePage.css';

const HomePage = () => {

  const textStyling = {
    color: 'whitesmoke',
  }

    return(
      <div>
        <div className='background' style={{backgroundImage: `url(${image})`}}>
            <NavBar textColor = {textStyling}/>
            <div className='mainText'>
              <h1>Nvidia RTX 4090</h1>
              <p style={{color:'whitesmoke'}}>The next big thing, get yours before the scalpers!</p>
              <a href='/catalog' className='buy-now'>Buy Now</a>
            </div>
        </div>
      </div>
    )
}

export default HomePage;
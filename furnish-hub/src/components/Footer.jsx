import '../styles/footer.scss'

import facebookIcon from '../assets/icons/facebook.png' 
import instagramIcon from '../assets/icons/instagram.png' 
import youtubeIcon from '../assets/icons/youtube.png' 
import googleIcon from '../assets/icons/google.png' 
import mapIcon from '../assets/icons/location.png'
import phoneIcon from '../assets/icons/phone.png'
import emailIcon from '../assets/icons/email.png'


const footer = () => {
  const scrollToComponent = (componentName) => {
    const component = document.getElementById(componentName);
    component.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer>
      <div>
        <div className='footer-links'>
          <div className='social-links'>
            <h4>FurnishHub</h4>
            <p>Elevate Your Space with Exquisite Hand
          crafted Furniture. Discover Timeless 
              Elegance and Comfort Today.</p>
            <div>
              <a href="https://www.facebook.com/"><img src={facebookIcon} alt="facebook" /></a>
              <a href="https://www.instagram.com/"><img src={instagramIcon} alt="instagram" /></a>
              <a href="https://www.youtube.com/"><img src={youtubeIcon} alt="youtube" /></a>
              <a href="https://www.google.com/"><img src={googleIcon} alt="google" /></a>
             </div>
          </div>  
          <div className='links'>
            <p>About Us</p>
            <ul>
            <li><button onClick={() => scrollToComponent('home')}>Home</button></li>
            <li><button onClick={() => scrollToComponent('products')}>Products</button></li>
            <li><button onClick={() => scrollToComponent('services')}>Our Services</button></li>
            <li><button onClick={() => scrollToComponent('about')}>About Us</button></li>
            </ul>
          </div>
          <div className='links'>
            <p>About Us</p>
            <ul>
            <li><button onClick={() => scrollToComponent('home')}>Home</button></li>
            <li><button onClick={() => scrollToComponent('products')}>Products</button></li>
            <li><button onClick={() => scrollToComponent('services')}>Our Services</button></li>
            <li><button onClick={() => scrollToComponent('about')}>About Us</button></li>
            </ul>
          </div>
          <div className='contacts'>
            <p>Contact Us</p>
            <div>
              
            <div>
              <img src={mapIcon} alt="" />
              <p>Haripur KPK, Pakistan</p>
            </div>
            <div>
              <img src={phoneIcon} alt="" />
              <p>+921234567890</p>
            </div>
            <div>
              <img src={emailIcon} alt="" />
              <p>Furnishhub@gmail.com</p>
            </div>

            </div>
          
          </div>
        </div>
        <div className='horizontal-line'></div>
        <div className='copyright'>
          <p>&copy;2023 Furnishhub. All rights reserved</p>
        </div>
      </div>    
    </footer>
  )
}

export default footer
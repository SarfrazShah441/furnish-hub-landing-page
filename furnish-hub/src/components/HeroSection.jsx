import '../styles/hero-section.scss'
import heroImage from "../assets/images/hero-section.png";
import ratingStar from '../assets/icons/rating-star.png'
import customer1 from '../assets/icons/customer-1.png'
import customer2 from '../assets/icons/customer-2.png'
import customer3 from '../assets/icons/customer-3.png'
import customer4 from '../assets/icons/customer-4.png'
import customer5 from '../assets/icons/customer-5.png'


const HeroSection = () => {
  return (
    <section className='hero-section'>
      <div className='hero-container'>
      <div className='hero-container__top'>
        <div>
          <h1>Furniture that is universally loved</h1>
          <p>Explore a world of exquisite furniture on our website.
            From timeless classics to modern marvels, discover the 
            perfect pieces to transform your space into a haven of
            comfort and style.</p>
          <button>Discover Now</button>
        </div>
        <div className='hero-image__container'>
            <img className='img' src={heroImage} alt="furnitures" />
        </div>
      </div>
      <div className='reviews'>
          <div className='customer-avatars'>
            <img src={customer1} alt="customer1" />
            <img src={customer2} alt="customer2" />
            <img src={customer3} alt="customer3" />
            <img src={customer4} alt="customer4" />
            <img src={customer5} alt="customer5" />
        </div>
        <div className='review-headline'>
          <p>Our Happy Customers</p>
          <div>
              <img src={ratingStar} alt="rating" />
              <p>4.9 (125k reviews)</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default HeroSection
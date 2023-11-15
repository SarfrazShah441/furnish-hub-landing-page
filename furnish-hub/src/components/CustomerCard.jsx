import '../styles/customer-card.scss'
import ratingStar from '../assets/icons/rating-star.png'
const CustomerCard = ({ name, imageSource, review}) => {
  return (
    <div className='customer-card'>
      <div>
        <img src={imageSource} alt="" />
        <div>
          <p>{name}</p>
          <div>
          <img src={ratingStar} alt="rating" />
          <img src={ratingStar} alt="rating" />
          <img src={ratingStar} alt="rating" />
          <img src={ratingStar} alt="rating" />
          <img src={ratingStar} alt="rating" />
          </div>
        </div>
      </div>
      <p>{review}</p>
    </div>
  )
}

export default CustomerCard
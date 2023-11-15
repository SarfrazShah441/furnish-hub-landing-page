import '../styles/item-card.scss'
import cartIcon from '../assets/icons/cart-item.png'


const ItemCard = ({ title, pictureSource, description, price}) => {
  return (
    <div className='card'>
      <img src={pictureSource} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="pricing">
          <span>${price}</span>
          <div>
            <img src={cartIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
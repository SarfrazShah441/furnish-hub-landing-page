import '../styles/products.scss'
import ItemCard from './ItemCard'
import sofa1 from '../assets/images/sofa-1.png'
import sofa2 from '../assets/images/sofa-2.png'
import sofa3 from '../assets/images/sofa-3.png'


const Products = () => {
  return (
    <section id='products'>
      <h2>Our top selling items</h2>
      <p>Delve into a selection of our most sought-after furniture items, cherished by a wide range of customers due to their exceptional style, durability, and appeal.</p>
      <ul className="filters">
        <li>Sofa</li>
        <li>Chairs</li>
        <li>Bed</li>
        <li>Lump</li>
        <li>Decore</li>
      </ul>
      <div className='card-container'>
        <ItemCard
          title='Budget-Friendly Finds'
          pictureSource={sofa1}
          description='Transform your space with our handcrafted premium furniture. Impeccable craftsmanship meets timeless design for statement pieces.'
          price={499.99}
        />
        <ItemCard
          title='Contemporary Classics'
          pictureSource={sofa2}
          description='Modern elegance meets timeless charm in our Contemporary Classics collection, effortlessly enhancing any room.'
          price={899.99}
        />
        <ItemCard
          title='Premium'
          pictureSource={sofa3}
          description='Transform your space with our handcrafted premium furniture. Impeccable craftsmanship meets timeless design for statement pieces.'
          price={1499.99}
        />
      </div>
    </section>
  )
}

export default Products
import '../styles/services.scss'
import ServicesCard from './ServicesCard'
import deliveryIcon from '../assets/icons/delivery.png'
import cashbackIcon from '../assets/icons/cash-back.png'
import salesIcon from '../assets/icons/exchange-item.png'
import customerSupportIcon from '../assets/icons/duration.png'


const Services = () => {
  return (
    <section id='services'>
      <h2>Our Services</h2>
      <div>
        <ServicesCard title={'Free Delivery'} source={deliveryIcon} description={'free delivery'} />
        <ServicesCard title={'Cash Back'} source={cashbackIcon} description={'cash back'} />
        <ServicesCard title={'Exchange Item'} source={salesIcon} description={'exchange item'} />
        <ServicesCard title={'Support'} source={customerSupportIcon} description={'customer support'} />
      </div>
    </section>
  )
}

export default Services
import '../styles/about.scss'
import CustomerCard from '../components/CustomerCard'
import customer1 from '../assets/icons/customer-1.png'
import customer2 from '../assets/icons/customer-2.png'
import customer3 from '../assets/icons/customer-4.png'

const About = () => {
  return (
    <section id='about'>
      <h2>Our happy customers</h2>
      <div>
        <div>
        <CustomerCard name="Olivia Davis" imageSource={customer1} review="Absolutely in love with my premium sofa! It's a showstopper in my living room. The service was impeccable. Highly recommended!" />
        <CustomerCard name="Ava Martinez" imageSource={customer2} review="Found amazing budget-friendly options on this site. My new furniture fits perfectly and didn't break the bank. Will definitely shop here again!" />
        <CustomerCard name="Sophia Wilson" imageSource={customer3} review="As an interior designer, I rely on top-quality suppliers. This website never disappoints. The premium pieces elevate my designs." />
        </div>
      </div>
    </section>
  )
}

export default About
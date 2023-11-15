import '../styles/services-card.scss'

const ServicesCard = ({ title, source, description }) => {
  return (
    <div className='services-card'>
      <div>
      <img src={source} alt={description} />
      </div>
          <h3>{title}</h3>
    </div>
  )
}

export default ServicesCard
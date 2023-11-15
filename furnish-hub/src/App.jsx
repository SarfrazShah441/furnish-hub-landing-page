// components
import Services from './components/Services'
import Products from './components/Products'
import About from './components/About'
import Footer from './components/Footer'


// sass files
import './styles/header.scss'
import './styles/services.scss'
import './styles/products.scss'
import './styles/about.scss'
import './styles/footer.scss'
import './styles/hero-section.scss'
import './styles/item-card.scss'
import './styles/customer-card.scss'
import './styles/home.scss'
import './styles/services-card.scss'
import './styles/exclusive-deals.scss'
import './App.scss'
import Home from './components/Home'
import ExclusiveDeals from './components/ExclusiveDeals'


// Component based approach

function App() {

  return (
    <>
        <Home />
        <Services />
        <Products />
        <ExclusiveDeals />
        <About />
      <Footer />
    </>
  )
}

export default App

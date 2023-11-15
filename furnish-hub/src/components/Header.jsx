import '../styles/header.scss'

const Header = () => {
    const scrollToComponent = (componentName) => {
      const component = document.getElementById(componentName);
      component.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <header className='header'>
        <div>
          <p>FurnishHub</p>
        <nav>
          <ul>
            <li><button onClick={() => scrollToComponent('home')}>Home</button></li>
            <li><button onClick={() => scrollToComponent('products')}>Products</button></li>
            <li><button onClick={() => scrollToComponent('services')}>Our Services</button></li>
            <li><button onClick={() => scrollToComponent('about')}>About Us</button></li>
          </ul>
        </nav>
        <button>Sign up</button>
        </div>
      </header>
    );
  }

export default Header
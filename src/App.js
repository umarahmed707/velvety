import './App.css';
import About from './Component/About';
import Herosection from './Component/Herosection'
import Productsection from './Component/Productsection'
import ProductTestimonials from './Component/ProductTestimonials';
import Service from './Component/Service';
import Footer from './Component/Footer';
import SkinProduct from './Component/SkinProduct';


function App() {
  return (
    <div >
      <Herosection/>
      <About/>
      <Productsection/>
      <SkinProduct/>
      <Service/>
      <ProductTestimonials/>
      <Footer/>
    </div>
  );
}

export default App;

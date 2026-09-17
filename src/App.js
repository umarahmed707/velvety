import './App.css';
import About from './Component/About';
import Herosection from './Component/Herosection'
import Productsection from './Component/Productsection'
import Service from './Component/Service';


function App() {
  return (
    <div >
      <Herosection/>
      <About/>
      <Productsection/>
      <Service/>
    </div>
  );
}

export default App;

import './App.css';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Services from './components/Services/Services';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Gallery/>
      <Products/>
    </>
  );
}

export default App;

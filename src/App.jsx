import './App.css';
import { CaringSection } from './components/CaringSection';
import { MyFooter } from './components/MyFooter';
import { HelpingSection } from './components/Helping';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { NewsLetter } from './components/NewsLetter';
import { ProductsSection } from './components/ProductsSection';
import { Services } from './components/Services';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <HelpingSection />
      <ProductsSection />
      <CaringSection />
      <NewsLetter />
      <MyFooter />
    </>
  );
}

export default App;

import './App.css';
import BannerBottom from './Components/LandingPage/BannerBottom/BannerBottom';
import Banner from './Components/LandingPage/BannerLandingPage/Banner';
import Footer from './Components/LandingPage/Footer/Footer';
import Highlight from './Components/LandingPage/Highlights/Highlight';
import DrawerAppBar from './Components/LandingPage/Navbar/Navbar';
import OurProduct from './Components/LandingPage/OurProduct/OurProduct';
import WhyChooseUs from './Components/LandingPage/WhyChooseUs/WhyChooseUs';

function App() {
  return (
    <div className="App">
      <DrawerAppBar/>
      <Banner/>
      <BannerBottom/>
      <OurProduct />
      <WhyChooseUs />
      <Highlight />
      <Footer />
    </div>
  );
}

export default App;

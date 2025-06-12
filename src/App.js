import Header from 'components/Header/Header';
import './App.scss';
import Footer from 'components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from 'Pages/HomePage';
import Location from 'Pages/Location';
import Contact from 'Pages/Contact';
import About from 'Pages/About';
import ShopNow from 'components/ShopNow/ShopNow';
import Search from 'components/Search/Search';
import { useEffect, useState } from 'react';
import NewUserPopup from 'components/NewUserPopup/NewUserPopup';

function App() {
  const [show, setShow] = useState(false);

  // To display the New user / announcement popup after 3 seconds delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  console.log(show)

  return (
    <div>
      <Router>
        <Header />
        <NewUserPopup show={show} onHide={() => setShow(false)} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<HomePage />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<ShopNow />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

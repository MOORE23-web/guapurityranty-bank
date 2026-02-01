import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PersonalBanking from './pages/PersonalBanking';
import BusinessBanking from './pages/BusinessBanking';
import Loans from './pages/Loans';
import Investments from './pages/Investments';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal" element={<PersonalBanking />} />
            <Route path="/business" element={<BusinessBanking />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

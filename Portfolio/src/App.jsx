import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header';

import About from './components/about';

import Portfolio from './components/portfolio';

import Contact from './components/contact';

import Footer from './components/footer';

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/"  element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />}  />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App

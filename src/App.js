import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import About from './components/About';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <Router>
      {showIntro ? (
        <Intro onFinish={() => setShowIntro(false)} />
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          <Header />
          <div className="hero">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1 }}
            >
              Welcome to Ghost Studios
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Creating Next-Gen Gaming Experiences
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <Link to="/about">
                <button className="primary-btn">Learn More</button>
              </Link>
            </motion.div>
          </div>
          <Footer />
        </motion.div>
      )}
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

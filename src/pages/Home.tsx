// src/pages/Home.tsx (partial update)
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Rellax from 'rellax';
import './Home.css';

function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parallaxRef.current) {
      // Initialize Rellax on the element with a slower speed
      new Rellax(parallaxRef.current, { speed: -2 });
    }
  }, []);

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome to My Juicy Site</h1>
      <p>This is the home page styled with peacock feather colors!</p>
      <div className="parallax-element" ref={parallaxRef}>
        <img src="/src/assets/react.svg" alt="Parallax Element" />
      </div>
    </motion.div>
  );
}

export default Home;

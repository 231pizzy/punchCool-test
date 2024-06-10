import React, { lazy, Suspense, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { TailSpin } from 'react-loader-spinner';
const FindTalent = lazy(() => import('./components/FindTalent'));
const FindWork = lazy(() => import('./components/FindWork'));
const Hero = lazy(() => import('./components/Hero'));
const Articles = lazy(() => import('./components/Articles'));
const Journey = lazy(() => import('./components/Journey'));
const About = lazy(() => import('./components/About'));
const Faq = lazy(() => import('./components/Faq'));
const Footer = lazy(() => import('./components/Footer'));
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [showScrollUpButton, setShowScrollUpButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUpButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <Suspense fallback={
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <TailSpin visible={true} height="80" width="80" color="rgba(82, 90, 160, 1)" ariaLabel="tail-spin-loading" radius="1" wrapperStyle={{}} wrapperClass="" />
        </div>
      }>
        <section id="home">
          <Hero />
        </section>
        <section id="find-work">
          <FindWork />
        </section>
        <section id="find-talent">
          <FindTalent />
        </section>
        <section id="articles">
          <Articles />
        </section>
        <section id="journey">
          <Journey />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="faq">
          <Faq />
        </section>
        <FaArrowUp
          className={showScrollUpButton ? 'showButton' : 'hidden'}
          onClick={scrollToTop}
        />
        <Footer scrollToTop={scrollToTop} />
      </Suspense>
    </div>
  );
}

export default App;

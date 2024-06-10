import React, { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
const FindTalent = lazy(() => import('./components/FindTalent'));
const FindWork = lazy(() => import('./components/FindWork'));
const Hero = lazy(() => import('./components/Hero'));
const Articles = lazy(() => import('./components/Articles'));
const Journey = lazy(() => import('./components/Journey'));
const About = lazy(() => import('./components/About'));
const Faq = lazy(() => import('./components/Faq'));
const Footer = lazy(() => import('./components/Footer'));
import { TailSpin } from 'react-loader-spinner'

function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={ <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <TailSpin
                visible={true}
                height="80"
                width="80"
                color="rgba(82, 90, 160, 1)"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>}>
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
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

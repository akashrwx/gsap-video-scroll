import React, { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import '../styles/homepage.scss';

gsap.registerPlugin(ScrollTrigger);

function Homepage() {
  const heroVideo = useRef();
  const heroSection = useRef();
  const heroContentOne = useRef();

  useEffect(() => {
    heroVideo.current.currentTime = 0;
  }, [heroVideo]);

  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: heroSection.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })

      .fromTo(
        heroVideo.current,
        {
          currentTime: 0,
        },
        {
          currentTime: 13,
        },
      );
  }, [tl]);
  return (
    <Layout>
      <section className="hero-scroll" ref={heroSection}>
        <div className="hero-section">
          <div className="fixed-hero">
            <div className="container relative">
              <div className="hero-right-content">
                <div className="slide-numbers">
                  <span>01</span>
                  <span>02</span>
                  <span>03</span>
                </div>
                <div className="scroll-down">
                  <span>SCROLL DOWN</span>
                </div>
              </div>
              <div className="hero-content" ref={heroContentOne}>
                <div className="content text-center">
                  <div className="masked-item">
                    <h1>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Enim, eligendi?
                    </h1>
                  </div>
                  <div className="masked-item">
                    <a href="#!" className="button">
                      Open account
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-anim">
              <video src="/video/hero-animation.mp4" ref={heroVideo} muted />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <img src="/img/hero002.webp" alt="" />
      </div>
    </Layout>
  );
}

export default Homepage;

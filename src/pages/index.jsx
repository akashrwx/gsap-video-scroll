import React from 'react';

import '../styles/homepage.scss';


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
            <div className="container">
        <img src="/img/hero002.webp" alt="" />
      </div>

           
          </div>
        </div>
      </section>

     
    </Layout>
  );
}

export default Homepage;

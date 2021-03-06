import React from 'react';
import Layout from '../components/Layout';
import '../styles/homepage.scss';



function Homepage() {
  
  return (
    <Layout>
      <section className="hero-scroll">
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
              <div className="hero-content">
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

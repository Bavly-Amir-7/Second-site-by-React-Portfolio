// this is App.js

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { useEffect } from 'react';
import { Opacity } from '@mui/icons-material';
import Swal from 'sweetalert2';
import { articlesData } from './components/articlesData';

function App() {
  const [showScrollBtn, setshowScrollBtn] = useState(false)

    // Function to show article in modal
  const showArticleModal = (articleId) => {
    const article = articlesData[articleId];
    if (!article) return;

    // Check if current theme is light or dark
    const isLightMode = document.body.classList.contains('light');

    // Apply theme-specific styling to content
    const themedContent = article.content.replace(
      /color: #333/g,
      isLightMode ? 'color: #333' : 'color: #e0e0e0'
    ).replace(
      /background: #f5f5f5/g,
      isLightMode ? 'background: #f5f5f5' : 'background: #2a2a2a'
    );

    Swal.fire({
      title: article.title,
      html: `
        <div style="text-align: left; direction: ltr;">
          <div style="margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center; padding-bottom: 1rem; border-bottom: 2px solid ${isLightMode ? '#e0e0e0' : '#444'};">
                        <span style="
              background: ${
                article.category === 'React' ? '#2196F3' :
                article.category === 'CSS' ? '#28a745' :
                article.category === 'JavaScript' ? '#ffc107' :
                article.category === 'Comparison' ? '#6f42c1' :
                article.category === 'Frameworks' ? '#e83e8c' :
                article.category === 'CSS Frameworks' ? '#20c997' : '#2196F3'
              };
              color: ${article.category === 'JavaScript' ? '#000' : 'white'};
              padding: 6px 12px;
              border-radius: 20px;
              font-size: 0.9rem;
              font-weight: 600;
            ">${article.category}</span>
            <span style="color: ${isLightMode ? '#666' : '#aaa'}; font-size: 0.9rem;">${article.readTime}</span>
          </div>
          <div style="color: ${isLightMode ? '#333' : '#e0e0e0'};">
            ${themedContent}
          </div>
        </div>
      `,
      width: '90%',
      maxWidth: '800px',
      confirmButtonText: 'Close',
      confirmButtonColor: '#2196F3',
      background: isLightMode ? '#ffffff' : '#2d2d2d',
      color: isLightMode ? '#333333' : '#e0e0e0',
      customClass: {
        popup: 'custom-article-modal',
        htmlContainer: 'custom-article-content'
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 499) {
        setshowScrollBtn(true)
      } else {
        setshowScrollBtn(false)
      }
    }
    )
  }, [])

  return (
    <>
      <div id='up' className='container'>
        <Header />
        <section id="about">
          <Hero />
        </section>
        <div className="divider" />
        <section id="articles">
          <div style={{ padding: '4rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ color: 'var(--title)', marginBottom: '1rem', fontSize: '2.5rem' }}>Articles & Blog</h2>
              <p style={{ color: 'var(--subtitle)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                Explore my latest articles, tutorials, and insights about web development, programming, and technology trends.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1400px', margin: '0 auto' }}>

              <article style={{
                background: 'var(--bgHeader)',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid rgba(93, 188, 252, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{
                    background: 'var(--blue)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>React</span>
                </div>
                <h3 style={{ color: 'var(--title)', marginBottom: '1rem', fontSize: '1.4rem', lineHeight: '1.4' }}>
                  Building a Complete E-commerce Platform with React
                </h3>
                <p style={{ color: 'var(--subtitle)', marginBottom: '1.5rem', lineHeight: '1.6', minHeight: '72px', display: 'flex', alignItems: 'center' }}>
                  React's component-based architecture makes it perfect for creating dynamic, reusable, and scalable e-commerce applications.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--subtitle)', fontSize: '0.9rem' }}>8 min read</span>
                  <button onClick={() => showArticleModal(1)} style={{
                    background: 'transparent',
                    color: 'var(--blue)',
                    border: '1px solid var(--blue)',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    Read More
                  </button>
                </div>
              </article>

              <article style={{
                background: 'var(--bgHeader)',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid rgba(93, 188, 252, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{
                    background: '#28a745',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>CSS</span>
                </div>
                <h3 style={{ color: 'var(--title)', marginBottom: '1rem', fontSize: '1.4rem', lineHeight: '1.4' }}>
                  Mastering Responsive Design with Modern CSS
                </h3>
                <p style={{ color: 'var(--subtitle)', marginBottom: '1.5rem', lineHeight: '1.6', minHeight: '72px', display: 'flex', alignItems: 'center' }}>
                  Modern CSS provides powerful tools like Flexbox, Grid, and media queries to create fully responsive layouts.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--subtitle)', fontSize: '0.9rem' }}>10 min read</span>
                  <button onClick={() => showArticleModal(2)} style={{
                    background: 'transparent',
                    color: 'var(--blue)',
                    border: '1px solid var(--blue)',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    Read More
                  </button>
                </div>
              </article>

              <article style={{
                background: 'var(--bgHeader)',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid rgba(93, 188, 252, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{
                    background: '#ffc107',
                    color: '#000',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>JavaScript</span>
                </div>
                <h3 style={{ color: 'var(--title)', marginBottom: '1rem', fontSize: '1.4rem', lineHeight: '1.4' }}>
                  JavaScript Best Practices for Modern Development
                </h3>
                <p style={{ color: 'var(--subtitle)', marginBottom: '1.5rem', lineHeight: '1.6', minHeight: '72px', display: 'flex', alignItems: 'center' }}>
                  Essential JavaScript tips, ES6+ features, and coding patterns every developer should adopt for clean code.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--subtitle)', fontSize: '0.9rem' }}>7 min read</span>
                  <button onClick={() => showArticleModal(3)} style={{
                    background: 'transparent',
                    color: 'var(--blue)',
                    border: '1px solid var(--blue)',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    Read More
                  </button>
                </div>
              </article>

              <article style={{
                background: 'var(--bgHeader)',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid rgba(93, 188, 252, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{
                    background: '#6f42c1',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>Comparison</span>
                </div>
                <h3 style={{ color: 'var(--title)', marginBottom: '1rem', fontSize: '1.4rem', lineHeight: '1.4' }}>
                  JavaScript vs TypeScript: Why I Still Prefer JavaScript
                </h3>
                <p style={{ color: 'var(--subtitle)', marginBottom: '1.5rem', lineHeight: '1.6', minHeight: '72px', display: 'flex', alignItems: 'center' }}>
                  While TypeScript is powerful for large applications, JavaScript offers simplicity and flexibility.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--subtitle)', fontSize: '0.9rem' }}>5 min read</span>
                  <button onClick={() => showArticleModal(4)} style={{
                    background: 'transparent',
                    color: 'var(--blue)',
                    border: '1px solid var(--blue)',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    Read More
                  </button>
                </div>
              </article>

              <article style={{
                background: 'var(--bgHeader)',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid rgba(93, 188, 252, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{
                    background: '#e83e8c',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>Frameworks</span>
                </div>
                <h3 style={{ color: 'var(--title)', marginBottom: '1rem', fontSize: '1.4rem', lineHeight: '1.4' }}>
                  React vs Angular vs Vue vs Next: Why I Prefer React
                </h3>
                <p style={{ color: 'var(--subtitle)', marginBottom: '1.5rem', lineHeight: '1.6', minHeight: '72px', display: 'flex', alignItems: 'center' }}>
                  A comprehensive comparison of the most popular front-end frameworks and libraries.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--subtitle)', fontSize: '0.9rem' }}>9 min read</span>
                  <button onClick={() => showArticleModal(5)} style={{
                    background: 'transparent',
                    color: 'var(--blue)',
                    border: '1px solid var(--blue)',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    Read More
                  </button>
                </div>
              </article>

              <article style={{
                background: 'var(--bgHeader)',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid rgba(93, 188, 252, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{
                    background: '#20c997',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>CSS Frameworks</span>
                </div>
                <h3 style={{ color: 'var(--title)', marginBottom: '1rem', fontSize: '1.4rem', lineHeight: '1.4' }}>
                  Bootstrap vs Tailwind: Choosing the Right CSS Framework
                </h3>
                <p style={{ color: 'var(--subtitle)', marginBottom: '1.5rem', lineHeight: '1.6', minHeight: '72px', display: 'flex', alignItems: 'center' }}>
                  Two different approaches to styling: component-based vs utility-first methodology.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--subtitle)', fontSize: '0.9rem' }}>6 min read</span>
                  <button onClick={() => showArticleModal(6)} style={{
                    background: 'transparent',
                    color: 'var(--blue)',
                    border: '1px solid var(--blue)',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    Read More
                  </button>
                </div>
              </article>

            </div>
          </div>
        </section>
        <div className="divider" />
        <section id="projects">
          <Main />
        </section>
        <div className="divider" />
        <section id="speaking">
          <div style={{ padding: '4rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ color: 'var(--title)', marginBottom: '1rem', fontSize: '2.5rem' }}>Speaking & Events</h2>
              <p style={{ color: 'var(--subtitle)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                I love sharing knowledge through conferences, workshops, and tech talks about modern web development and programming best practices.
              </p>
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

              {/* Available Topics */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ color: 'var(--title)', marginBottom: '2rem', fontSize: '2rem', textAlign: 'center' }}>Available Topics</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>

                  <div style={{
                    background: 'var(--bgHeader)',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(93, 188, 252, 0.3)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚛️</div>
                    <h4 style={{ color: 'var(--title)', marginBottom: '1rem', fontSize: '1.3rem' }}>Modern React Development</h4>
                    <p style={{ color: 'var(--subtitle)', lineHeight: '1.6' }}>
                      Hooks, Context API, performance optimization, and building scalable React applications.
                    </p>
                  </div>

                  <div style={{
                    background: 'var(--bgHeader)',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(93, 188, 252, 0.3)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎨</div>
                    <h4 style={{ color: 'var(--title)', marginBottom: '1rem', fontSize: '1.3rem' }}>Advanced CSS Techniques</h4>
                    <p style={{ color: 'var(--subtitle)', lineHeight: '1.6' }}>
                      CSS Grid, Flexbox, animations, and creating responsive designs that work everywhere.
                    </p>
                  </div>

                  <div style={{
                    background: 'var(--bgHeader)',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(93, 188, 252, 0.3)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
                    <h4 style={{ color: 'var(--title)', marginBottom: '1rem', fontSize: '1.3rem' }}>JavaScript Best Practices</h4>
                    <p style={{ color: 'var(--subtitle)', lineHeight: '1.6' }}>
                      ES6+ features, async programming, performance tips, and writing maintainable code.
                    </p>
                  </div>

                  <div style={{
                    background: 'var(--bgHeader)',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(93, 188, 252, 0.3)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
                    <h4 style={{ color: 'var(--title)', marginBottom: '1rem', fontSize: '1.3rem' }}>Web Performance</h4>
                    <p style={{ color: 'var(--subtitle)', lineHeight: '1.6' }}>
                      Optimization strategies, loading performance, and creating fast, user-friendly web experiences.
                    </p>
                  </div>

                  <div style={{
                    background: 'var(--bgHeader)',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(93, 188, 252, 0.3)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💼</div>
                    <h4 style={{ color: 'var(--title)', marginBottom: '1rem', fontSize: '1.3rem' }}>From Idea to Production</h4>
                    <p style={{ color: 'var(--subtitle)', lineHeight: '1.6' }}>
                      Complete project lifecycle, deployment strategies, and turning concepts into real applications.
                    </p>
                  </div>

                  <div style={{
                    background: 'var(--bgHeader)',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(93, 188, 252, 0.3)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
                    <h4 style={{ color: 'var(--title)', marginBottom: '1rem', fontSize: '1.3rem' }}>Career Development</h4>
                    <p style={{ color: 'var(--subtitle)', lineHeight: '1.6' }}>
                      Tips for junior developers, building a portfolio, and growing as a full-stack developer.
                    </p>
                  </div>

                </div>
              </div>

              {/* Contact Info */}
              <div style={{
                background: 'var(--bgHeader)',
                padding: '3rem',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid rgba(93, 188, 252, 0.3)'
              }}>
                <h3 style={{ color: 'var(--title)', marginBottom: '1rem', fontSize: '1.8rem' }}>Ready to Book a Talk?</h3>
                <p style={{ color: 'var(--subtitle)', marginBottom: '2rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 2rem' }}>
                  I'm available for conferences, workshops, meetups, and corporate training sessions.
                  Let's discuss how I can help share knowledge with your audience.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>📧</span>
                    <span style={{ color: 'var(--subtitle)' }}>Email for speaking inquiries</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>⏰</span>
                    <span style={{ color: 'var(--subtitle)' }}>30-60 minute sessions</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>🌍</span>
                    <span style={{ color: 'var(--subtitle)' }}>Remote & On-site</span>
                  </div>
                </div>
                <button style={{
                  background: 'var(--blue)',
                  color: 'white',
                  padding: '12px 32px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  transition: 'background 0.3s ease'
                }}>
                  Book a Speaking Session
                </button>
              </div>

            </div>
          </div>
        </section>
        <div className="divider" />
        <section id="contact">
          <Contact />
        </section>
        <div className="divider" />
        <Footer />

        <a style={{ opacity: showScrollBtn ? 1 : 0, transition: "0.9s" }} href="#up">
          <button className='scroll2top icon-arrow-up2'></button>
        </a>
      </div>
    </>
  );
}

export default App;
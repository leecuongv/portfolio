import React from 'react';

const Home = () => {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
                <h1 className="text-4xl font-bold text-primary mb-4">Van Cuong Le</h1>
                <p className="text-xl text-secondary mb-6">
                  Contributing to the development and success of the company where I work & Strive to become a senior developer in the future.
              </p>
                <a href="#about" className="bg-primary text-on-primary px-6 py-2 rounded hover:bg-primary-d40">Learn More</a>
          </div>
      </section>
  );
};

export { Home };
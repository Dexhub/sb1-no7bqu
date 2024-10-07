import React from 'react'

const Hero = () => {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-cover bg-center bg-bollywood">
      <div className="container mx-auto px-4 text-center">
        <div className="glass-effect p-8 inline-block">
          <h1 className="text-6xl font-bold text-white mb-6 shadow-text">Find Your Bollywood Ending</h1>
          <p className="text-2xl text-white mb-8 shadow-text">Experience the magic of real connections with Jab We Met in the Bay Area</p>
          <button 
            onClick={scrollToEvents}
            className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-3 px-8 rounded-full hover:from-pink-600 hover:to-orange-600 transition duration-300 shadow-lg"
          >
            Find My Soulmate
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
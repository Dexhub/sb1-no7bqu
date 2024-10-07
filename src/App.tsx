import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import DatingStats from './components/DatingStats'
import EventExperience from './components/EventExperience'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import EventTypes from './components/EventTypes'
import Story from './components/Story'
import EventRegistration from './components/EventRegistration'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <DatingStats />
      <EventExperience />
      <Benefits />
      <Testimonials />
      <EventTypes />
      <Story />
      <EventRegistration />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya & Arjun',
      quote: 'We locked eyes across the room, and it was like a scene from a Bollywood movie. Thanks to Jab We Met, we\'re writing our own love story now!'
    },
    {
      name: 'Neha',
      quote: 'After months of frustrating online dating, I found my perfect match at a Jab We Met event. The connection was instant and genuine.'
    },
    {
      name: 'Vikram',
      quote: 'I was skeptical at first, but the event was so well-organized and fun. I met someone special who shares my passions and values.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pink-100 to-orange-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gradient mb-12">Love Stories in the Making</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <div className="p-6">
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold text-pink-500 text-right">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
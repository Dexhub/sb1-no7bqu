import React from 'react'
import { Clock, Users, Heart, Zap } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    { icon: <Clock className="w-12 h-12 text-pink-500" />, title: 'Save Time', description: 'Meet multiple potential partners in one evening' },
    { icon: <Users className="w-12 h-12 text-pink-500" />, title: 'Real Connections', description: 'Experience genuine chemistry face-to-face' },
    { icon: <Heart className="w-12 h-12 text-pink-500" />, title: 'Cultural Compatibility', description: 'Connect with others who share your Indian heritage' },
    { icon: <Zap className="w-12 h-12 text-pink-500" />, title: 'Bay Area Focus', description: 'Events tailored for the Indian community in Silicon Valley' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gradient mb-12">Why Choose Jab We Met?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-800 mb-4">With Jab We Met, you can:</p>
          <ul className="text-left inline-block">
            <li className="flex items-start mb-2">
              <span className="text-pink-500 mr-2">✓</span>
              <span>Save time, money, and emotional energy</span>
            </li>
            <li className="flex items-start mb-2">
              <span className="text-pink-500 mr-2">✓</span>
              <span>Experience real chemistry and cultural compatibility</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">✓</span>
              <span>Find your life partner within the Bay Area Indian community</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Benefits
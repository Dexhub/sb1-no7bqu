import React from 'react'
import { Heart, Users, MapPin } from 'lucide-react'

const Features = () => {
  const features = [
    { icon: <Heart className="w-12 h-12 text-pink-500" />, title: 'Meaningful Connections', description: 'Meet like-minded individuals and forge genuine relationships' },
    { icon: <Users className="w-12 h-12 text-pink-500" />, title: 'Curated Events', description: 'Enjoy well-organized speed dating events tailored for Indian professionals' },
    { icon: <MapPin className="w-12 h-12 text-pink-500" />, title: 'Bay Area Focus', description: 'Connect with local singles in the vibrant Bay Area community' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Jab We Met?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
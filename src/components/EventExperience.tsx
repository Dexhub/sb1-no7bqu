import React from 'react'
import { Users, Smartphone, Clock, MessageCircle, CheckSquare, Mail, Coffee, Shirt, MessageSquare } from 'lucide-react'

const EventExperience = () => {
  const steps = [
    { icon: <Users className="w-8 h-8 text-pink-500" />, title: 'No Host', description: 'Our events run without a physical host present' },
    { icon: <Smartphone className="w-8 h-8 text-pink-500" />, title: 'Personal Instructions', description: 'Follow instructions provided directly to your phone' },
    { icon: <Clock className="w-8 h-8 text-pink-500" />, title: 'Date Notifications', description: 'We notify you when each date starts and ends – you find them!' },
    { icon: <MessageCircle className="w-8 h-8 text-pink-500" />, title: 'Guided Conversations', description: 'We provide prompts to guide your conversation each round' },
    { icon: <CheckSquare className="w-8 h-8 text-pink-500" />, title: 'Match or Pass', description: 'Input your choice (Match or Pass) for each date' },
    { icon: <Mail className="w-8 h-8 text-pink-500" />, title: 'Results', description: 'Receive match results the next day via email' },
  ]

  const uniqueFeatures = [
    {
      icon: <Coffee className="w-12 h-12 text-pink-500" />,
      title: "Organic Connections",
      description: "Experience the thrill of spontaneous meetings, reminiscent of classic Bollywood meet-cutes. Our events bring back the magic of serendipitous encounters, allowing you to discover your potential soulmate in a relaxed, natural setting. It's all about creating your own filmy moment!"
    },
    {
      icon: <Shirt className="w-12 h-12 text-pink-500" />,
      title: "Be Your Authentic Self",
      description: "Forget the pressure of dressing to impress. At Jab We Met, we celebrate your true self. Whether you're most comfortable in a kurta, jeans, or your favorite tech company hoodie, wear what makes you feel like the star of your own love story. Your personality is your best outfit!"
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-pink-500" />,
      title: "Conversation Starters",
      description: "Say goodbye to awkward silences! Our carefully crafted prompts spark engaging discussions, helping you dive deep into meaningful conversations. Discover shared passions, dreams, and values that go beyond surface-level chit-chat. It's your chance to create a connection that could last a lifetime!"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gradient mb-12">How Jab We Met Speed Dating Works</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md mr-4">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-pink-200" style={{ height: 'calc(100% - 3rem)' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gradient mb-8">What Makes Jab We Met Unique?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {uniqueFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-center">{feature.title}</h4>
                <p className="text-gray-700 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Ready to experience the Jab We Met difference? Join us for a friendly, no-pressure evening of meeting new people in the Bay Area Indian community.
          </p>
          <a href="#events" className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-3 px-8 rounded-full hover:from-pink-600 hover:to-orange-600 transition duration-300 shadow-lg inline-block">
            Find My Soulmate
          </a>
        </div>
      </div>
    </section>
  )
}

export default EventExperience
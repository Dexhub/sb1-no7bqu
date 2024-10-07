import React from 'react'
import { Heart } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Heart className="text-pink-500 mr-2" />
          <span className="text-2xl font-bold text-gray-800">Jab We Met</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-6 mr-6">
            <li><a href="#home" className="text-gray-600 hover:text-pink-500">Home</a></li>
            <li><a href="#how-it-works" className="text-gray-600 hover:text-pink-500">How It Works</a></li>
            <li><a href="#story" className="text-gray-600 hover:text-pink-500">Our Story</a></li>
            <li><a href="#faq" className="text-gray-600 hover:text-pink-500">FAQ</a></li>
          </ul>
          <a 
            href="#events" 
            className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-2 px-4 rounded-full hover:from-pink-600 hover:to-orange-600 transition duration-300 shadow-lg"
          >
            Register
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
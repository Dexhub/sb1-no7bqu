import React from 'react'
import { Clock, DollarSign, Calendar, Users } from 'lucide-react'

const DatingStats = () => {
  const stats = [
    { icon: <Clock className="w-8 h-8 text-pink-500" />, title: 'Time Wasted', value: '10 hours/week', description: 'Average time spent on dating apps' },
    { icon: <DollarSign className="w-8 h-8 text-pink-500" />, title: 'Money Spent', value: '$240/year', description: 'Average spending on dating app subscriptions' },
    { icon: <Calendar className="w-8 h-8 text-pink-500" />, title: 'Dates Before Success', value: '13 dates', description: 'Average number of dates before finding a compatible partner' },
    { icon: <Users className="w-8 h-8 text-pink-500" />, title: 'Matches to Date Ratio', value: '1 in 50', description: 'Matches that lead to an actual date' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gradient mb-8">Stop Looking for Love in All the Wrong Places</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">The Reality of Online Dating:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>Endless swiping, minimal connections</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>Mismatched expectations and disappointing meetups</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>Time-consuming conversations that lead nowhere</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>Difficulty finding culturally compatible partners</span>
            </li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0">{stat.icon}</div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">{stat.title}</p>
                  <p className="text-2xl font-bold text-pink-600">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DatingStats
import React from 'react'
import { MapPin, Calendar, Clock, Users } from 'lucide-react'

const EventTypes = () => {
  const events = [
    {
      date: 'October 24, 2024',
      day: 'Thursday',
      time: '7:00 PM - 9:00 PM',
      location: 'San Francisco',
      description: 'Event for professionals aged 27-34',
      status: 'Men - BOOKED (waitlist) | Women - 2 spots left',
    },
    {
      date: 'October 25, 2024',
      day: 'Friday',
      time: '7:00 PM - 9:00 PM',
      location: 'Mountain View Downtown',
      description: 'Professionals aged 27-34',
      status: 'Men - 1 spot left | Women - BOOKED (waitlist)',
    },
    {
      date: 'October 26, 2024',
      day: 'Saturday',
      time: '7:00 PM - 9:00 PM',
      location: 'Fremont',
      description: 'Open to all professionals',
      status: 'Men - BOOKED (waitlist) | Women - 3 spots left',
    },
    {
      date: 'November 1, 2024',
      day: 'Friday',
      time: '7:00 PM - 9:00 PM',
      location: 'Palo Alto',
      description: 'Tech professionals mixer',
      status: 'Men - 2 spots left | Women - 1 spot left',
    },
  ]

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gradient mb-12">Upcoming Jab We Met Events</h2>
        <p className="text-xl text-center text-gray-700 mb-12">
          Join us for an evening of meaningful connections and potential Bollywood-worthy love stories.
          Choose the event that suits you best and get ready to meet your perfect match!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ${index % 2 === 0 ? 'bg-gradient-to-br from-pink-50 to-orange-50' : 'bg-gradient-to-br from-pink-100 to-orange-100'}`}>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-pink-500 mr-2" />
                  <span className="text-lg font-semibold">{event.date} ({event.day})</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-pink-500 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-pink-500 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-pink-500 mr-2" />
                  <span>{event.description}</span>
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  {event.status}
                </div>
                <button className="mt-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-2 px-4 rounded-full hover:from-pink-600 hover:to-orange-600 transition duration-300 shadow-lg">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventTypes
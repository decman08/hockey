import React from 'react';
import { Calendar, MapPin, Clock, Plus } from 'lucide-react';

const Schedule = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Calendar className="w-8 h-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-900">Rink Schedule</h1>
        </div>
        <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          <Plus className="w-4 h-4" />
          <span>Book Rink Time</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Upcoming Sessions</h3>
          <div className="space-y-4">
            {upcomingSessions.map((session, index) => (
              <div key={index} className="border-l-4 border-indigo-500 pl-4 py-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{session.type}</h4>
                  <span className="text-sm text-gray-500">{session.date}</span>
                </div>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {session.venue}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {session.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Available Venues</h3>
          <div className="space-y-4">
            {venues.map((venue, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-medium">{venue.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{venue.address}</p>
                <div className="mt-2">
                  <span className="text-sm font-medium text-gray-600">Available Times:</span>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {venue.availableTimes.map((time, timeIndex) => (
                      <span
                        key={timeIndex}
                        className="px-2 py-1 text-xs bg-gray-100 rounded-full text-gray-700"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Monthly Calendar</h3>
        {/* Calendar component would go here */}
        <div className="text-center py-8 text-gray-500">
          Calendar view coming soon...
        </div>
      </div>
    </div>
  );
};

const upcomingSessions = [
  {
    type: 'Team Practice',
    date: 'Mar 12, 2024',
    time: '18:00 - 20:00',
    venue: 'Main Rink',
  },
  {
    type: 'Friendly Match',
    date: 'Mar 15, 2024',
    time: '19:00 - 21:00',
    venue: 'Sports Complex',
  },
  {
    type: 'Skills Training',
    date: 'Mar 18, 2024',
    time: '17:30 - 19:30',
    venue: 'Training Center',
  },
];

const venues = [
  {
    name: 'Main Rink',
    address: '123 Sports Ave, City',
    availableTimes: ['18:00', '19:00', '20:00'],
  },
  {
    name: 'Sports Complex',
    address: '456 Athletic Blvd, City',
    availableTimes: ['17:00', '18:00', '21:00'],
  },
];

export default Schedule;
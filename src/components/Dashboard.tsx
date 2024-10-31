import React from 'react';
import { Users, DollarSign, Calendar, AlertTriangle, Trophy } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Trophy className="w-8 h-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-900">Team Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Active Players"
          value="16"
          icon={Users}
          color="bg-blue-500"
        />
        <DashboardCard
          title="Monthly Revenue"
          value="$1,280"
          icon={DollarSign}
          color="bg-green-500"
        />
        <DashboardCard
          title="Upcoming Sessions"
          value="3"
          icon={Calendar}
          color="bg-purple-500"
        />
        <DashboardCard
          title="Pending Payments"
          value="4"
          icon={AlertTriangle}
          color="bg-red-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 text-sm">
                <span className="text-gray-500">{activity.date}</span>
                <span className="text-gray-700">{activity.description}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Schedule</h2>
          <div className="space-y-4">
            {schedule.map((event, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{event.title}</p>
                  <p className="text-sm text-gray-500">{event.venue}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{event.date}</p>
                  <p className="text-sm text-gray-500">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value, icon: Icon, color }: any) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
      <div className={`${color} p-3 rounded-full`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  </div>
);

const activities = [
  { date: '2024-03-10', description: 'New player John Doe registered' },
  { date: '2024-03-09', description: 'Practice session scheduled at Main Rink' },
  { date: '2024-03-08', description: 'Monthly payments collected from 12 players' },
  { date: '2024-03-07', description: 'Team meeting scheduled for next week' },
];

const schedule = [
  {
    title: 'Team Practice',
    venue: 'Main Rink',
    date: 'Mar 12, 2024',
    time: '18:00 - 20:00',
  },
  {
    title: 'Friendly Match',
    venue: 'Sports Complex',
    date: 'Mar 15, 2024',
    time: '19:00 - 21:00',
  },
  {
    title: 'Skills Training',
    venue: 'Training Center',
    date: 'Mar 18, 2024',
    time: '17:30 - 19:30',
  },
];

export default Dashboard;
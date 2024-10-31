import React from 'react';
import { FileText, Download } from 'lucide-react';

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <FileText className="w-8 h-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{report.title}</h3>
              <button className="text-indigo-600 hover:text-indigo-800">
                <Download className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">{report.description}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Last generated:</span>
              <span className="text-gray-700">{report.lastGenerated}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Custom Report Generator</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Report Type
            </label>
            <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option>Team Roster</option>
              <option>Financial Summary</option>
              <option>Attendance Report</option>
              <option>Payment History</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date Range
            </label>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <input
                type="date"
                className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
          <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

const reports = [
  {
    title: 'Team Roster',
    description: 'Complete list of all team members with their details and status',
    lastGenerated: 'Mar 10, 2024',
  },
  {
    title: 'Financial Summary',
    description: 'Monthly overview of payments, dues, and expenses',
    lastGenerated: 'Mar 9, 2024',
  },
  {
    title: 'Attendance Report',
    description: 'Player attendance records for practices and games',
    lastGenerated: 'Mar 8, 2024',
  },
  {
    title: 'Payment History',
    description: 'Detailed record of all payments and outstanding dues',
    lastGenerated: 'Mar 7, 2024',
  },
  {
    title: 'Venue Usage',
    description: 'Summary of rink bookings and utilization',
    lastGenerated: 'Mar 6, 2024',
  },
  {
    title: 'Performance Stats',
    description: 'Team and player statistics from games and practices',
    lastGenerated: 'Mar 5, 2024',
  },
];

export default Reports;
import React from 'react';
import { DollarSign, Calendar } from 'lucide-react';

const Payments = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <DollarSign className="w-8 h-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-900">Payment Management</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Monthly Overview</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Due:</span>
              <span className="font-semibold">$1,600</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Collected:</span>
              <span className="font-semibold text-green-600">$1,280</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Pending:</span>
              <span className="font-semibold text-red-600">$320</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Recent Payments</h3>
          <div className="space-y-4">
            {recentPayments.map((payment, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">{payment.player}</p>
                  <p className="text-sm text-gray-500">{payment.date}</p>
                </div>
                <span className={`font-semibold ${
                  payment.status === 'Completed' ? 'text-green-600' : 'text-red-600'
                }`}>
                  ${payment.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Payment Schedule</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Player
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Due Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paymentSchedule.map((payment, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {payment.player}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.dueDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${payment.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        payment.status === 'Paid'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const recentPayments = [
  { player: 'John Doe', date: 'Mar 10, 2024', amount: '100', status: 'Completed' },
  { player: 'Jane Smith', date: 'Mar 9, 2024', amount: '100', status: 'Completed' },
  { player: 'Mike Johnson', date: 'Mar 8, 2024', amount: '100', status: 'Completed' },
];

const paymentSchedule = [
  { player: 'John Doe', dueDate: 'Apr 1, 2024', amount: '100', status: 'Pending' },
  { player: 'Jane Smith', dueDate: 'Apr 1, 2024', amount: '100', status: 'Paid' },
  { player: 'Mike Johnson', dueDate: 'Apr 1, 2024', amount: '100', status: 'Pending' },
];

export default Payments;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Trophy, DollarSign, Calendar, Users, FileText } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Dashboard', icon: Trophy },
    { path: '/players', label: 'Players', icon: Users },
    { path: '/payments', label: 'Payments', icon: DollarSign },
    { path: '/schedule', label: 'Schedule', icon: Calendar },
    { path: '/reports', label: 'Reports', icon: FileText },
  ];

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Trophy className="w-8 h-8" />
              <span className="font-bold text-xl">Declan's Masterpiece</span>
            </div>
            <div className="flex space-x-4">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium
                    ${location.pathname === path
                      ? 'bg-indigo-700 text-white'
                      : 'text-indigo-100 hover:bg-indigo-500'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
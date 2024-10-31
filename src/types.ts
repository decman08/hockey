export interface Player {
  id: string;
  name: string;
  jerseyNumber: number;
  email: string;
  phone: string;
  emergencyContact: string;
  joinDate: string;
}

export interface Payment {
  id: string;
  playerId: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending' | 'overdue';
}

export interface RinkBooking {
  id: string;
  venueName: string;
  date: string;
  startTime: string;
  endTime: string;
  cost: number;
  notes?: string;
}
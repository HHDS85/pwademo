'use client';
import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend
} from 'recharts';

export default function CampaignStats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        setStats(data.stats || []);
      } catch (err) {
        console.error('Fehler beim Laden der Statistikdaten:', err);
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">Kampagnen-Statistiken</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-900 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Impressionen nach Tag</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="impressions" stroke="#6366F1" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-gray-900 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Budget pro Publisher</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="publisher" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="budget" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
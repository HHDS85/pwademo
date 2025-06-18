'use client';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Login noch nicht verbunden – Auth-Anbindung erforderlich.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4">
      <div className="w-full max-w-md bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Anmelden bei Pay with Attention
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">E-Mail-Adresse</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Passwort</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black dark:bg-white text-white dark:text-black py-2 px-4 rounded hover:opacity-90"
          >
            Einloggen
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
          Noch keinen Zugang? Zugang auf Anfrage.
        </p>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gamepad2 } from 'lucide-react';
import { AuthService } from '@/components/services/services'; // Assurez-vous que le chemin est correct

export default function Authentification({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError('');
    setLoading(true);
    
    const result = await AuthService.login(username, password);
    
    setLoading(false);
    
    if (result.success) {
      onLoginSuccess(result.user);
    } else {
      setError(result.error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 bg-white shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Gamepad2 size={40} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Kasbah Virtuel</h1>
          <p className="text-gray-600">Back Office Administration</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nom d'utilisateur
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
              placeholder="Entrez votre nom d'utilisateur"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
              placeholder="Entrez votre mot de passe"
              disabled={loading}
            />
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <Button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold shadow-lg disabled:opacity-50"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </Button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Identifiants par défaut:</p>
          <p className="font-mono bg-gray-100 px-3 py-1 rounded mt-2">
            admin / admin123
          </p>
        </div>
      </Card>
    </div>
  );
}
const API_URL = 'http://localhost:5000/api'; // L'adresse de votre backend Node

export class AuthService {
  static async login(username, password) {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        return { success: false, error: data.msg || 'Erreur de connexion' };
      }

      // On stocke le token JWT (sécurité réelle)
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      return { success: true, user: data.user };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Erreur serveur' };
    }
  }

  static logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/admin';
  }

  static isAuthenticated() {
    return !!localStorage.getItem('token');
  }
}

export class GamesService {
  static async getAllGames() {
    try {
      const response = await fetch(`${API_URL}/games`);
      const data = await response.json();
      return { success: true, data: data };
    } catch (error) {
      return { success: false, error: 'Impossible de charger les jeux' };
    }
  }

  static async saveGame(gameData) {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/games`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Envoi du token de sécurité
        },
        body: JSON.stringify(gameData),
      });
      
      const data = await response.json();
      if(!response.ok) throw new Error(data.error);
      
      // Recharger la liste complète
      return await this.getAllGames();
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
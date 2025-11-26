import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Save, X, Eye, LogOut, Home, Gamepad2, Menu, Search } from 'lucide-react';
import { AuthService, GamesService } from '@/components/services/services';

// --- Composants Internes (Dashboard, GamesManager) ---

function Dashboard({ stats }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100 mb-1">Jeux Scratch</p>
            <p className="text-4xl font-bold">{stats.scratchGames}</p>
          </div>
          <Gamepad2 size={48} className="text-blue-200" />
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-purple-100 mb-1">Jeux Kahoot</p>
            <p className="text-4xl font-bold">{stats.kahootGames}</p>
          </div>
          <Gamepad2 size={48} className="text-purple-200" />
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-100 mb-1">Total Actifs</p>
            <p className="text-4xl font-bold">{stats.activeGames}</p>
          </div>
          <Gamepad2 size={48} className="text-green-200" />
        </div>
      </Card>
    </div>
  );
}

function GamesManager({ games, onGamesUpdate }) {
  const [selectedCategory, setSelectedCategory] = useState('scratch');
  const [editingGame, setEditingGame] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [previewGame, setPreviewGame] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    nameFr: '',
    description: '',
    descriptionFr: '',
    type: '',
    embedUrl: '',
    bgImage: '',
  });

  const handleAdd = () => {
    setIsAddingNew(true);
    setEditingGame(null);
    setFormData({
      name: '',
      nameFr: '',
      description: '',
      descriptionFr: '',
      type: selectedCategory === 'scratch' ? 'Quiz' : 'Kahoot',
      embedUrl: '',
      bgImage: '/images/default.jpg',
    });
  };

  const handleEdit = (game) => {
    setEditingGame(game.id);
    setIsAddingNew(false);
    setFormData(game);
  };

  const handleSave = async () => {
    if (!formData.name || !formData.embedUrl) {
      alert('Veuillez remplir au moins le nom arabe et l\'URL');
      return;
    }

    const gameData = editingGame ? { ...formData, id: editingGame } : formData;
    const result = await GamesService.saveGame(selectedCategory, gameData);
    
    if (result.success) {
      onGamesUpdate(result.data);
      setEditingGame(null);
      setIsAddingNew(false);
      setFormData({
        name: '',
        nameFr: '',
        description: '',
        descriptionFr: '',
        type: '',
        embedUrl: '',
        bgImage: '',
      });
    } else {
      alert(result.error);
    }
  };

  const handleDelete = async (gameId) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce jeu ?')) return;
    
    const result = await GamesService.deleteGame(selectedCategory, gameId);
    if (result.success) {
      onGamesUpdate(result.data);
    } else {
      alert(result.error);
    }
  };

  const handleCancel = () => {
    setEditingGame(null);
    setIsAddingNew(false);
  };

  const filteredGames = games[selectedCategory].filter(game => 
    game.name.includes(searchTerm) || 
    game.nameFr.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher un jeu..."
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex gap-4 mb-8">
        <Button
          onClick={() => { setSelectedCategory('scratch'); setEditingGame(null); setIsAddingNew(false); }}
          className={`px-8 py-3 font-semibold ${selectedCategory === 'scratch' ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-600'}`}
        >
          🎮 Jeux Scratch ({games.scratch.length})
        </Button>
        <Button
          onClick={() => { setSelectedCategory('kahoot'); setEditingGame(null); setIsAddingNew(false); }}
          className={`px-8 py-3 font-semibold ${selectedCategory === 'kahoot' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-indigo-600'}`}
        >
          🎯 Jeux Kahoot ({games.kahoot.length})
        </Button>
      </div>

      {!isAddingNew && !editingGame && (
        <Button onClick={handleAdd} className="mb-6 bg-green-600 hover:bg-green-700 text-white shadow-lg">
          <Plus className="mr-2" size={20} /> Ajouter un nouveau jeu
        </Button>
      )}

      {(isAddingNew || editingGame) && (
        <Card className="p-6 mb-8 bg-white shadow-xl border-2 border-indigo-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            {isAddingNew ? <><Plus size={28} /> Ajouter un jeu</> : <><Edit size={28} /> Modifier le jeu</>}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">Nom (Arabe) *</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500" placeholder="اسم اللعبة" dir="rtl" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">Nom (Français)</label>
              <input type="text" value={formData.nameFr} onChange={(e) => setFormData({...formData, nameFr: e.target.value})} className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500" placeholder="Nom du jeu" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">Description (Arabe)</label>
              <textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full p-3 border-2 border-gray-300 rounded-lg h-24" placeholder="وصف اللعبة" dir="rtl" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">Description (Français)</label>
              <textarea value={formData.descriptionFr} onChange={(e) => setFormData({...formData, descriptionFr: e.target.value})} className="w-full p-3 border-2 border-gray-300 rounded-lg h-24" placeholder="Description du jeu" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">Type</label>
              <input type="text" value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="w-full p-3 border-2 border-gray-300 rounded-lg" placeholder="Quiz, Puzzle, etc." />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">URL Embed *</label>
              <input type="text" value={formData.embedUrl} onChange={(e) => setFormData({...formData, embedUrl: e.target.value})} className="w-full p-3 border-2 border-gray-300 rounded-lg" placeholder="https://scratch.mit.edu/projects/.../embed" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold mb-2 text-gray-700">Image de fond (URL)</label>
              <input type="text" value={formData.bgImage} onChange={(e) => setFormData({...formData, bgImage: e.target.value})} className="w-full p-3 border-2 border-gray-300 rounded-lg" placeholder="/images/game.jpg" />
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-semibold shadow-lg"><Save className="mr-2" size={20} /> Enregistrer</Button>
            <Button onClick={handleCancel} className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 font-semibold"><X className="mr-2" size={20} /> Annuler</Button>
          </div>
        </Card>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map((game) => (
          <Card key={game.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: `url(${game.bgImage})`}}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">{game.type}</span>
              </div>
            </div>
            <div className="p-5 bg-white">
              <h3 className="text-lg font-bold text-gray-900 mb-1" dir="rtl">{game.name}</h3>
              <h4 className="text-sm text-gray-600 mb-3">{game.nameFr}</h4>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2" dir="rtl">{game.description}</p>
              <div className="flex gap-2">
                <Button onClick={() => setPreviewGame(game)} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2"><Eye size={16} className="mr-1" /> Voir</Button>
                <Button onClick={() => handleEdit(game)} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2"><Edit size={16} className="mr-1" /> Modifier</Button>
                <Button onClick={() => handleDelete(game.id)} className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-2"><Trash2 size={16} /></Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {previewGame && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-[90vw] h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-xl">
              <div><h3 className="text-2xl font-bold" dir="rtl">{previewGame.name}</h3><p className="text-sm text-indigo-100">{previewGame.nameFr}</p></div>
              <button onClick={() => setPreviewGame(null)} className="text-white hover:bg-white/20 p-2 rounded-lg"><X size={28} /></button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe src={previewGame.embedUrl} allowTransparency="true" width="100%" height="100%" frameBorder="0" scrolling="no" allowFullScreen className="w-full h-full"></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// --- Composant Principal GamesBackOffice ---

export default function GamesBackOffice({ user, onLogout }) {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [games, setGames] = useState({ scratch: [], kahoot: [] });
  const [stats, setStats] = useState({ totalGames: 0, scratchGames: 0, kahootGames: 0, activeGames: 0 });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const gamesResult = await GamesService.getAllGames();
    if (gamesResult.success) setGames(gamesResult.data);

    const statsResult = await GamesService.getStats();
    if (statsResult.success) setStats(statsResult.stats);
  };

  const handleGamesUpdate = async (updatedGames) => {
    setGames(updatedGames);
    const statsResult = await GamesService.getStats();
    if (statsResult.success) setStats(statsResult.stats);
  };

  const handleLogoutClick = async () => {
    await AuthService.logout();
    onLogout();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`bg-gradient-to-b from-slate-800 to-slate-900 text-white transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'} flex flex-col`}>
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div><h2 className="text-xl font-bold">Kasbah Virtuel</h2><p className="text-sm text-slate-400">Back Office</p></div>
            )}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white hover:bg-slate-700 p-2 rounded-lg"><Menu size={24} /></button>
          </div>
        </div>

        {sidebarOpen && (
          <div className="px-6 py-4 bg-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold">{user?.username?.charAt(0).toUpperCase()}</div>
              <div className="flex-1"><p className="text-sm font-semibold">{user?.username}</p><p className="text-xs text-slate-400">{user?.role}</p></div>
            </div>
          </div>
        )}

        <nav className="flex-1 p-4">
          <button onClick={() => setActiveSection('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${activeSection === 'dashboard' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}>
            <Home size={20} /> {sidebarOpen && <span>Tableau de bord</span>}
          </button>
          <button onClick={() => setActiveSection('games')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeSection === 'games' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}>
            <Gamepad2 size={20} /> {sidebarOpen && <span>Gestion des jeux</span>}
          </button>
        </nav>

        <div className="p-4 border-t border-slate-700">
          <button onClick={handleLogoutClick} className="w-full flex items-center gap-3 px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
            <LogOut size={20} /> {sidebarOpen && <span>Déconnexion</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="bg-white shadow-sm border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">{activeSection === 'dashboard' ? '📊 Tableau de bord' : '🎮 Gestion des Jeux'}</h1>
            <div className="text-sm text-gray-500">Connecté en tant que <span className="font-semibold text-gray-700">{user?.username}</span></div>
          </div>
        </div>

        <div className="p-8">
          {activeSection === 'dashboard' && <Dashboard stats={stats} />}
          {activeSection === 'games' && <GamesManager games={games} onGamesUpdate={handleGamesUpdate} />}
        </div>
      </div>
    </div>
  );
}
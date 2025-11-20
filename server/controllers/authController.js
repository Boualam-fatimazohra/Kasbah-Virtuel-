const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // 1. Chercher l'utilisateur dans la VRAIE base de données
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: "Utilisateur non trouvé" });

    // 2. Vérifier le mot de passe (hashé)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Mot de passe incorrect" });

    // 3. Créer un token de sécurité (JWT)
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ token, user: { id: user._id, username: user.username, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Fonction pour créer le premier admin (à appeler une seule fois)
exports.register = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.json({ msg: "Admin créé" });
}
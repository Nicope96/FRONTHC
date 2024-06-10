const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
    const { email, nombre, documento, contrasena } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(contrasena, 10);
        const user = await User.create({ email, nombre, documento, contrasena: hashedPassword });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, contrasena } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user || !await bcrypt.compare(contrasena, user.contrasena)) {
            return res.status(401).json({ error: 'Credenciales incorrectas' });
        }
        const token = jwt.sign({ userId: user.id }, 'your_jwt_secret');
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

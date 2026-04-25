require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const supabase = require('./api/config/supabase');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve Static Frontend Files
app.use(express.static(path.join(__dirname, 'public')));

// ----------------------------------------
// API Endpoints
// ----------------------------------------

// Health Check
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Node.js backend is running successfully.' });
});

// User Sign Up via Supabase Auth
app.post('/api/auth/signup', async (req, res) => {
    const { email, password, fullName } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName
                }
            }
        });

        if (error) throw error;

        res.status(201).json({ message: 'User registered successfully', data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// User Log In via Supabase Auth
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) throw error;

        res.status(200).json({ message: 'Login successful', session: data.session });
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

// ----------------------------------------
// Catch-All Route for Frontend Pages
// ----------------------------------------
// This ensures that accessing /dashboard directly doesn't throw a 404
app.use((req, res, next) => {
    if (req.method === 'GET') {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    } else {
        res.status(404).json({ error: 'Not found' });
    }
});

// Start Server (only if not running in Vercel serverless environment)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`\n🚀 Server is running locally at http://localhost:${PORT}`);
        console.log(`🔌 Supabase connected: ${!!supabase}`);
    });
}

// Export for Vercel
module.exports = app;

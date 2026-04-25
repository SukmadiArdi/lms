const supabase = require('./config/supabase');

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({
      message: 'API is running successfully on Vercel Serverless Functions!',
      supabaseConnected: !!supabase
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

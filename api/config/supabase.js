const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL || 'https://vajadceaxoqyvkjslipl.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhamFkY2VheG9xeXZranNsaXBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxMTk2MzcsImV4cCI6MjA5MjY5NTYzN30.AM9yAoaYJPYChiLbCa-cfj2UaKJAowcYhIZsqS24P3Y';

let supabase = null;

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
} else {
  console.warn('Supabase URL or Key is missing. Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.');
}

module.exports = supabase;

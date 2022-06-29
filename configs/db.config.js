supb = require('@supabase/supabase-js');

const supabaseUrl = '{url}'
const supabaseKey = '{key}'
const supabase = supb.createClient(supabaseUrl, supabaseKey)

module.exports = supabase;
import { createClient } from '@supabase/supabase-js';

export default class API {}

API.supabaseUrl = 'https://tnyuekdkbeyutquansez.supabase.co';
API.supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
API.supabase = createClient(API.supabaseUrl, API.supabaseKey);

API.registerUser = async (email, password, username, name, surname) => {
};

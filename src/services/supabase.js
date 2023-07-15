import { createClient } from '@supabase/supabase-js';
// const { google } = require('googleapis');

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// const credentials = {
//   client_secret: process.env.REACT_APP_G_CLIENT_SECRET,
//   client_id: process.env.REACT_APP_G_CLIENT_ID,
//   redirect_uris: [process.env.REACT_APP_G_REDIRECT_URIS],
// };

// export const auth = new google.auth.GoogleAuth({
//   credentials,
//   scopes: ['https://www.googleapis.com/auth/calendar'],
// });

export default supabase;

   // lib/supabaseClient.ts
   import { createClient } from '@supabase/supabase-js';

   const supabaseUrl = 'https://xbesfpgpnytivtpqkanj.supabase.co'; // tu Project URL

   const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiZXNmcGdwbnl0aXZ0cHFrYW5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NTEwMDksImV4cCI6MjA2NTUyNzAwOX0.IXpTLn_P0mXvq--6WYyjrBou133pucO2RvMPwwzj2BQ'; // tu anon public key

   export const supabase = createClient(supabaseUrl, supabaseAnonKey);
   
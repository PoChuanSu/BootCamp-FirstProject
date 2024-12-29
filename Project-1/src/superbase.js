import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://scecryvbdicmtwqbaymt.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjZWNyeXZiZGljbXR3cWJheW10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzMzQzNDMsImV4cCI6MjA0OTkxMDM0M30.vtljDvRYHrK-EWg47tsD2XkZ-Gr3epFoJ1_fp1BuIZI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

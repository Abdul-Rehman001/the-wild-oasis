import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wuuedfizqdbtitfwncmx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1dWVkZml6cWRidGl0ZnduY214Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNDAyMDcsImV4cCI6MjAyODkxNjIwN30.Eg3gc9mXLpr7nb4dJqeI_axfx_HhWcLXrk8TE88iLL8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

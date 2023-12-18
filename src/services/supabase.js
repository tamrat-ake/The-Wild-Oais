import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabaseUrl = "https://venlgfhrzjdsecbwqhyp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlbmxnZmhyempkc2VjYndxaHlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3NjUzOTQsImV4cCI6MjAxNzM0MTM5NH0.c8sFFzraPc27ky3kZG71ghgk4LwvsXuYmnUXSeqdfn0";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

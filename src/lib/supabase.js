import { createClient } from "@supabase/supabase-js";

// Use environment variables loaded by Vite from the .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = supabaseUrl !== "" && supabaseKey !== "";

export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseKey || "placeholder"
);

export const BUCKETS = {
  POSTS: "news-markdown",
  IMAGES: "news-bucket-images",
};

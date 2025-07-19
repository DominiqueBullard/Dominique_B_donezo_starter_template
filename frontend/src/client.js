import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://jxgjhsgenantdazgogva.supabase.co",
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

export default supabase;

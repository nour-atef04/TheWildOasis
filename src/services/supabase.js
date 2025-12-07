import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pfpealebyimgpmhmuwsd.supabase.co";
const supabaseKey = "sb_publishable_62z7OzxEkj0vNWjXlBhwdg_DQ370dtf";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

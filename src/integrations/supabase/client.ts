// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jvdktloszrwehsccenas.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2ZGt0bG9zenJ3ZWhzY2NlbmFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MDc2OTMsImV4cCI6MjA1MzM4MzY5M30.kQASipHrW2K5uoFpnvLrPmtfWX69yfNTZAwHUHL4ESM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
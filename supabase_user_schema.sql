-- Supabase SQL schema for users table
CREATE TABLE
    users (
        uid TEXT PRIMARY KEY, -- Firebase UID
        email TEXT NOT NULL,
        display_name TEXT NOT NULL,
        first_name TEXT,
        last_name TEXT,
        profile_image TEXT -- URL or abbreviation
    );

-- Example: You can populate first_name and last_name by splitting display_name
-- profile_image can be a URL or generated abbreviation if no image is provided
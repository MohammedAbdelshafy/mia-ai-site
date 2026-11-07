-- Run this only in a newly provisioned MIA-owned database.
-- NOT applied by this PR. Do not expose this private schema to anonymous APIs.
CREATE SCHEMA IF NOT EXISTS mia_private;
REVOKE ALL ON SCHEMA mia_private FROM PUBLIC;
CREATE TABLE IF NOT EXISTS mia_private.waitlist (
  id uuid PRIMARY KEY,
  event_id uuid NOT NULL UNIQUE,
  email text NOT NULL UNIQUE CHECK (char_length(email) BETWEEN 3 AND 254),
  name varchar(80) NOT NULL DEFAULT '',
  plan varchar(30) NOT NULL DEFAULT 'preview',
  source varchar(40) NOT NULL DEFAULT 'mia_site',
  consent_version varchar(40) NOT NULL DEFAULT 'preview_inquiry_v1',
  marketing_opt_in boolean NOT NULL DEFAULT false,
  utm_source varchar(100) NOT NULL DEFAULT '',
  utm_medium varchar(100) NOT NULL DEFAULT '',
  utm_campaign varchar(100) NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS mia_waitlist_created_idx ON mia_private.waitlist(created_at DESC);
ALTER TABLE mia_private.waitlist ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON ALL TABLES IN SCHEMA mia_private FROM PUBLIC;

-- Migration number: 0001  2026-09-07T15:18:08.807Z

CREATE TABLE IF NOT EXISTS devices (
  id INTEGER PRIMARY KEY,
  device_key TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  room TEXT NOT NULL,
  is_on INTEGER NOT NULL DEFAULT 0
);

INSERT OR IGNORE INTO devices (
  id,
  device_key,
  name,
  room,
  is_on
) VALUES (
  1,
  'living-room-ac',
  'Air Conditioner',
  'living room',
  1
);
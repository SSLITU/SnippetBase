USE snippets_db;

CREATE TABLE snippets (
  id VARCHAR(255) PRIMARY KEY,
  content TEXT NOT NULL,
  type ENUM('text', 'code') NOT NULL
);
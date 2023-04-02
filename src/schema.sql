CREATE TABLE IF NOT EXISTS bbc_news.bbc_news
(
    news_id uuid NOT NULL,
    type character varying(50),
    title character varying(255),
    news_origin text,
    news_tw text,
    toeic_500 text,
    toeic_700 text,
	news_url character varying(255),
    date date,	
    CONSTRAINT bbc_news_pkey PRIMARY KEY (news_id)
);

CREATE TABLE IF NOT EXISTS bbc_news.users
(
  	user_id uuid NOT NULL PRIMARY KEY,
  	name character varying(50) NOT NULL,
  	username character varying(50) UNIQUE NOT NULL,
  	password_hash BYTEA NOT NULL,
  	email VARCHAR(255) UNIQUE NOT NULL,
  	time timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM bbc_news.bbc_news
SELECT * FROM bbc_news.users
SELECT * FROM bbc_news.bbc_news
-- drop table bbc_news.bbc_news
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
)
SELECT pg_column_size(type) FROM bbc_news.bbc_news;

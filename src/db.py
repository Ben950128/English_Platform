from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import UUID

db = SQLAlchemy()

class BBCNews(db.Model):
    __table_args__ = {"schema": "bbc_news"}
    __tablename__  = "bbc_news"
    news_id = db.Column(UUID(as_uuid=True), primary_key=True)
    type = db.Column(db.String(50))
    title = db.Column(db.String(255))
    news_origin = db.Column(db.Text)
    news_tw = db.Column(db.Text)
    toeic_500 = db.Column(db.Text)
    toeic_700 = db.Column(db.Text)
    news_url = db.Column(db.String(255))
    date = db.Column(db.Date)

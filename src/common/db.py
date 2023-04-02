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


class Users(db.Model):
    __table_args__ = {"schema": "bbc_news"}
    __tablename__  = "users"
    user_id = db.Column(UUID(as_uuid=True), primary_key=True)
    name = db.Column(db.String(50))
    username = db.Column(db.String(50))
    password_hash = db.Column(db.LargeBinary)
    email = db.Column(db.String(255))
    time = db.Column(db.TIMESTAMP(timezone=False), server_default=db.func.current_timestamp())
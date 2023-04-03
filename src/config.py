import os
from datetime import timedelta
from dotenv import load_dotenv

load_dotenv()

class Config(object):
    TESTING = False
    DEBUG = False
    JSON_AS_ASCII = False
    SQLALCHEMY_DATABASE_URI = os.getenv("SQLALCHEMY_DATABASE_URI")
    CACHE_TYPE = "SimpleCache"
    CACHE_DEFAULT_TIMEOUT = 300
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(minutes=15)
    JWT_TOKEN_LOCATION = ["headers"]


class DevelopmentConfig(Config):
    ENV = "development"
    DEBUG = True

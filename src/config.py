import os
from dotenv import load_dotenv

load_dotenv()

class Config(object):
    TESTING = False
    DEBUG = False


class DevelopmentConfig(Config):
    ENV = "development"
    DEBUG = True
    JSON_AS_ASCII = False
    SQLALCHEMY_DATABASE_URI = os.getenv("SQLALCHEMY_DATABASE_URI")
    CACHE_TYPE = "SimpleCache"
    CACHE_DEFAULT_TIMEOUT = 300

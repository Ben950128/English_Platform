class Config(object):
    TESTING = False
    DEBUG = False

class DevelopmentConfig(Config):
    ENV = "development"
    DEBUG = True
    JSON_AS_ASCII = False
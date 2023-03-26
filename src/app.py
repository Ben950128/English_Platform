from flask import Flask
from db import db
from common import cache
from api import news_blueprints

app = Flask(__name__)
app.config.from_object("config.DevelopmentConfig")
cache.init_app(app)
db.init_app(app)
app.register_blueprint(news_blueprints, url_prefix="/api")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port = 3000)
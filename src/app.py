from flask import Flask
from api import hello

app = Flask(__name__)
app.config.from_object("config.DevelopmentConfig")
app.register_blueprint(hello, url_prefix="/api")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port = 3000)
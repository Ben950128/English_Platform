from flask.views import MethodView
from flask import Blueprint

hello = Blueprint("my_blueprint", __name__)

class MyView(MethodView):
    def get(self):
        return "Hello World!"

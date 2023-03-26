from flask.views import MethodView
from flask import Blueprint, jsonify
from db import BBCNews
from common import cache

news_blueprints = Blueprint("news_blueprints", __name__)

class News(MethodView):
    @cache.cached(timeout=60)
    def get(self):
        rows = BBCNews.query.with_entities(BBCNews.type, BBCNews.title, BBCNews.news_origin).all()
        results = []
        for row in rows:
            each_news_detail = {
                "type": row[0],
                "title": row[1],
                "news_origin": row[2]
            }
            results.append(each_news_detail)
        response = jsonify(results)

        return response

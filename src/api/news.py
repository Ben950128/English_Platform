from flask import Blueprint, make_response
from flask.views import MethodView
from common import cache, BBCNews

news_blueprints = Blueprint("news_blueprints", __name__)

class News(MethodView):
    @cache.cached(timeout=60)
    def get(self, news_type):
        if news_type == "all":
            rows = BBCNews.query.with_entities(
                BBCNews.news_id,
                BBCNews.type,
                BBCNews.title,
                BBCNews.news_origin,
                BBCNews.news_tw,
                BBCNews.news_url,
                BBCNews.date
            ).limit(10).all()
        else:
            rows = BBCNews.query.filter(BBCNews.type==news_type).with_entities(
                BBCNews.news_id,
                BBCNews.type,
                BBCNews.title,
                BBCNews.news_origin,
                BBCNews.news_tw,
                BBCNews.news_url,
                BBCNews.date
            ).all()

        results = []
        for row in rows:
            each_news_detail = {
                "news_id": row[0],
                "type": row[1],
                "title": row[2],
                "news_origin": row[3],
                "news_tw": row[4],
                "news_url": row[5],
                "date": row[6]
            }
            results.append(each_news_detail)
        response = make_response(results, 200)
        return response
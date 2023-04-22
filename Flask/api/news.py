from flask import Blueprint, make_response
from flask.views import MethodView
from common import cache, BBCNews

news_blueprints = Blueprint("news_blueprints", __name__)

class NewsType(MethodView):
    @cache.cached(timeout=60)
    def get(self, news_type):
        if news_type == "all":
            rows = BBCNews.query.with_entities(
                BBCNews.news_id,
                BBCNews.type,
                BBCNews.title,
                BBCNews.news_origin,
                BBCNews.news_url,
                BBCNews.image_path,
                BBCNews.news_time
            ).limit(10).all()
        else:
            rows = BBCNews.query.filter(BBCNews.type==news_type).with_entities(
                BBCNews.news_id,
                BBCNews.type,
                BBCNews.title,
                BBCNews.news_origin,
                BBCNews.news_url,
                BBCNews.image_path,
                BBCNews.news_time
            ).limit(10).all()

        results = []
        for row in rows:
            each_news_detail = {
                "news_id": row[0],
                "type": row[1],
                "title": row[2],
                "news_origin": row[3],
                "news_url": row[4],
                "image_path": row[5],
                "date": str(row[6])
            }
            results.append(each_news_detail)
        response = make_response(results, 200)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
    

class OneNews(MethodView):
    def get(self, news_id):
        row = BBCNews.query.filter(BBCNews.news_id==news_id).with_entities(
            BBCNews.news_id,
            BBCNews.type,
            BBCNews.title,
            BBCNews.news_origin,
            BBCNews.news_tw,
            BBCNews.toeic_500,
            BBCNews.toeic_700,
            BBCNews.news_url,
            BBCNews.image_path,
            BBCNews.news_time
        ).first()

        results = {
            "news_id": row[0],
            "type": row[1],
            "title": row[2],
            "news_origin": row[3],
            "news_tw": row[4],
            "toeic_500": row[5],
            "toeic_700": row[6],
            "news_url": row[7],
            "image_path":row[8],
            "date": str(row[9])
        }
        response = make_response(results, 200)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
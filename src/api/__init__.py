from .news import news_blueprints, News

news_blueprints.add_url_rule("/news", view_func=News.as_view("news"))
from .news import news_blueprints, NewsType, OneNews
from .user import user_blueprints, User

news_blueprints.add_url_rule("/news/<news_id>", view_func=OneNews.as_view("one_news"))
news_blueprints.add_url_rule("/news/type/<news_type>", view_func=NewsType.as_view("news_type"))
user_blueprints.add_url_rule("/user", view_func=User.as_view("user"))
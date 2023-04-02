from .news import news_blueprints, News
from .user import user_blueprints, User

news_blueprints.add_url_rule("/news/<news_type>", view_func=News.as_view("news"))
user_blueprints.add_url_rule("/user", view_func=User.as_view("user"))
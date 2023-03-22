from .hello import hello, MyView


hello.add_url_rule("/hello", view_func=MyView.as_view("my_view"))
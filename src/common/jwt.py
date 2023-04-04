import atexit
from flask import make_response
from flask_jwt_extended import JWTManager
from apscheduler.schedulers.background import BackgroundScheduler
from datetime import datetime

# 設定JWT
jwt = JWTManager()

# 設定token過期的回傳值
@jwt.expired_token_loader
def expired_token_callback(jwt_header, jwt_payload):
    return make_response({"status": "fail", "message": "Token has expired"}, 401)

# 設定JWT blocklist
blocklist = dict()
def reset_blocklist():
    for key, values in blocklist.copy().items():
        if datetime.fromtimestamp(values) < datetime.now():
            del blocklist[key]

scheduler = BackgroundScheduler()
scheduler.add_job(func=reset_blocklist, trigger="interval", minutes=1)
scheduler.start()
atexit.register(lambda: scheduler.shutdown())

# 檢查jti是不是在blocklist
@jwt.token_in_blocklist_loader
def check_if_token_is_revoked(jwt_header, jwt_payload):
    jti = jwt_payload["jti"]
    token_in_blocklist = jti in blocklist
    return token_in_blocklist

# 若token在blocklist，回傳token revoked
@jwt.revoked_token_loader
def revoked_token_callback(jwt_header, jwt_payload):
    return make_response({"status": "fail", "message": "Token has been revoked"}, 401)
import atexit
from flask import make_response
from flask_jwt_extended import JWTManager
from apscheduler.schedulers.background import BackgroundScheduler

# 設定JWT
jwt = JWTManager()

# 設定token過期的回傳值
@jwt.expired_token_loader
def expired_token_callback(jwt_header, jwt_payload):
    return make_response({"status": "fail", "message": "Token has expired"}, 401)

# 設定JWT blocklist
blocklist = set()
def reset_blocklist():
    blocklist.clear()

scheduler = BackgroundScheduler()
scheduler.add_job(func=reset_blocklist, trigger="interval", minutes=15)
scheduler.start()
atexit.register(lambda: scheduler.shutdown())

# 檢查jti是不是在blocklist
@jwt.token_in_blocklist_loader
def check_if_token_is_revoked(jwt_header, jwt_payload: dict):
    jti = jwt_payload["jti"]
    token_in_blocklist = jti in blocklist
    return token_in_blocklist

# 設定token revoked的回傳值
@jwt.revoked_token_loader
def revoked_token_callback(jwt_header, jwt_payload):
    return make_response({
        "status": "fail",
        "message": "Token has been revoked",
    }, 401)
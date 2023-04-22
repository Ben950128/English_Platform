import bcrypt
import uuid
import sqlalchemy
import re
from flask import Blueprint, request, make_response
from flask.views import MethodView
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity, get_jwt
from common import blocklist, db, Users

user_blueprints = Blueprint("user_blueprints", __name__)

class User(MethodView):
    @jwt_required()
    def get(self):
        current_user = get_jwt_identity()
        user_info = {
            "user_id": current_user["user_id"],
            "name": current_user["name"],
            "username": current_user["username"],
            "email": current_user["email"]
        }
        response = make_response(user_info, 200)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
    
    def post(self):
        try:
            user_detail = request.get_json()
            name = user_detail["name"]
            username = user_detail["username"]
            password = user_detail["password"]
            email = user_detail["email"]
            email_pattern = r"([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+"
            if not re.match(email_pattern, email):
                res_detail = {"status": "fail", "message": "email格式錯誤",}
                return make_response(res_detail, 400)

        except:
            res_detail = {"status": "fail", "message": "請輸入必填欄位"}
            return make_response(res_detail, 400)
            
        try:
            assert type(username) is str and type(password) is str and username != "" and password != "", "輸入的帳號或密碼格式不符"
            salt = bcrypt.gensalt()
            pwd_hash = bcrypt.hashpw(password.encode("utf-8"), salt)
            new_user = Users(user_id=str(uuid.uuid4()), name=name, username=username, password_hash=pwd_hash, email=email)
            db.session.add(new_user)
            db.session.commit()
            response = make_response({"status": "success", "message": "註冊成功"}, 200)

        except AssertionError as e:
            err_str = str(e)
            response = make_response({"status": "fail", "message": err_str}, 400)

        except sqlalchemy.exc.IntegrityError:
            response = make_response({"status": "fail", "message": "帳號或email已重複，請重新輸入"}, 400)

        finally:
            response.headers.add("Access-Control-Allow-Origin", "*")
            return response
    
    def patch(self):
        request_json = request.get_json()
        username = request_json["username"]
        password = request_json["password"]
        try:
            assert type(username) is str and type(password) is str and username != "" and password != "", "輸入的帳號或密碼格式不符"
            row = Users.query.filter(Users.username==username).with_entities(
                Users.user_id,
                Users.name,
                Users.username,
                Users.password_hash,
                Users.email
            ).first()
            assert row != None, "無此帳號!請重新輸入!"
            salt = row[3][:29]
            hash_pwd = bcrypt.hashpw(password.encode("utf-8"), salt)
            assert hash_pwd == row[3], "密碼輸入錯誤!請重新輸入!"
            identity = {
                "user_id": str(row[0]),
                "name": row[1],
                "username": row[2],
                "email": row[4]
            }
            access_token = create_access_token(identity=identity)
            response = make_response(
                {
                    "status": "success",
                    "message": "登入成功",
                    "token": access_token
                }, 200
            )

        except AssertionError as e:
            err_str = str(e)
            response = make_response({"status": "fail", "message": err_str}, 400)

        finally:
            response.headers.add("Access-Control-Allow-Origin", "*")
            return response

    @jwt_required()
    def delete(self):
        jti = get_jwt()["jti"]
        exp = get_jwt()["exp"]
        blocklist[jti] = exp
        response = make_response({"status": "success", "message": "登出成功"}, 200)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
import jwt
import datetime

from myproject.settings import secret_key

# Encode the JWT

class JwtManager:

    @staticmethod
    def create_token(data):
        payload = {
            "user_id": data.get("user").id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        }
        payload_for_refresh_token = {
            "user_id": data.get("user").id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24)
        }
        access_token = jwt.encode(payload, secret_key, algorithm="HS256")
        refresh_token = jwt.encode(payload_for_refresh_token, secret_key, algorithm="HS256")
        return access_token, refresh_token

    @staticmethod
    def decode_token(encoded_jwt):
        try:
            decoded_payload = jwt.decode(encoded_jwt, secret_key, algorithms=["HS256"])
            return True
        except jwt.ExpiredSignatureError:
            raise Exception("Signature expired")
        except jwt.InvalidTokenError:
            raise Exception("Signature expired")


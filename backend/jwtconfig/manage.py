import jwt
import datetime

from myproject.settings import secret_key

# Encode the JWT

class JwtManager:

    @staticmethod
    def create_token(payload, payload_for_refresh_token):
        access_token = jwt.encode(payload, secret_key, algorithm="HS256")
        refresh_token = jwt.encode(payload_for_refresh_token, secret_key, algorithm="HS256")
        return access_token, refresh_token

    @staticmethod
    def decode_token(encoded_jwt):
        try:
            decoded_payload = jwt.decode(encoded_jwt, secret_key, algorithms=["HS256"])
            return decoded_payload
        except jwt.ExpiredSignatureError:
            raise Exception("Signature expired")
        except jwt.InvalidTokenError:
            raise Exception("Signature expired")


"""
Flask backend for ExploreKe
Imported packages;
Flask
"""

from flask import Flask
import time
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, static_url_path="/", static_folder="./client/build")
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://devbrian:exploreKe_pwd@localhost/exploreKe_db"
db  = SQLAlchemy(app)

from models import User
@app.route("/")
def get_time():
    return {'Name': 'Brian Omondi'}

if __name__ == '__main__':
    app.run(debug=True)

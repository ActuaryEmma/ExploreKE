"""
Flask backend for ExploreKe
Imported packages;
Flask
"""

from flask import Flask
import time


app = Flask(__name__)


from backend.models.tables import User

@app.route("/")
def get_time():
    return {'Name': 'Brian Omondi'}

if __name__ == '__main__':
    app.run(debug=True)

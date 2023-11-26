"""
Flask backend for ExploreKe
Imported packages;
Flask
"""

from flask import Flask, jsonify
import time

app = Flask(__name__, static_url_path="/", static_folder="./client/build")

@app.route("/")
def get_time():
    return{'time': time.time()}

if __name__ == '__main__':
    app.run(debug=True)

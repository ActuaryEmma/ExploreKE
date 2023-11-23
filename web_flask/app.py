#!/usr/bin/python3
""" Starts the exploreKe application """
from flask import Flask, render_template

app = Flask(__name__, template_folder='../templates')

@app.route('/', strict_slashes=False)
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5050, host='0.0.0.0')

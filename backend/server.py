# from flask import Flask, render_template

# app = Flask(__name__, static_url_path="/", static_folder="./client/build")
# app.config.from_object(config)
# @app.route("/home")
# def home():
#     #return ("Hello ExploreKe")
#     return app.send_static_file("index.html")

# if __name__=="__main__":
#     app.run(debug=True)


from flask import Flask

app = Flask(__name__, static_url_path="/", static_folder="./client/build")
# Assuming you have a config object defined somewhere
# app.config.from_object(config)

@app.route("/home")
def home():
    # return ("Hello ExploreKe")
    return app.send_static_file("index.html")

if __name__ == "__main__":
    app.run(debug=True)

"""
Flask backend for ExploreKe
Imported packages;
Flask
"""
from flask import Flask, jsonify, request, abort, make_response, render_template
import time
from models.tables import User, Article, Categories, Comments
from flask_cors import CORS
from models import storage
from datetime import datetime

app = Flask(__name__)
cors = CORS(app)

# Article routes 
@app.route("/articles", methods=["GET"],strict_slashes=False)
def get_articles():
   """ Retrieve a list of all articles """
   blogs = storage.all(Article).values()
   result = [blog.to_dict() for blog in blogs]
   return jsonify(result)

@app.route("/article/<id>", methods=['GET'], strict_slashes=False)
def get_article(id):
   """ Returns the article of the given id """
   article = storage.get(Article, id)
   if not article:
      abort(404)
   return jsonify(article.to_dict())

@app.route('/newarticle', methods=['POST'], strict_slashes=False)
def post_article():
   """ Add a new article to the db """
   data = request.get_json()

   if 'title' not in data or 'body' not in data:
      return jsonify({"error": "Missing 'title' or 'body' in request data"}), 400
   
   title = data['title']
   body = data['body']
   author_id = data.get('author_id', None)
   category_id = data.get('category_id', None)
   
   articles = Article(
      title=title,
      body=body,
      author_id=author_id,
      category_id=category_id,
      created_at=datetime.now(),
      updated_at=datetime.now()
   )
   storage.new(articles)
   storage.save()
   return jsonify({"message": "Article Successfully Posted"}), 201

@app.route('/articleupdate/<id>', methods=['PUT'], strict_slashes=False)
def update_article(id):
   """ Updates an article """
   article = storage.get(Article, id)

   data = request.get_json()
   if not data:
      abort(400, description="Not a JSON")

   ignore = ['id', 'author_id', 'category_id', 'created_at']
   for key, value in data.items():
      if key not in ignore:
         setattr(article, key, value)
   article.updated_at = datetime.now()

   storage.save()
   return make_response(jsonify(article.to_dict()), 200)

@app.route('/article/<id>', methods=['DELETE'], strict_slashes=False)
def delete_article(id):
   """ Deletes an article of corresponding id """
   article = storage.get(Article, id)
   if not article:
      abort(404)
   storage.delete(article)
   storage.save()

   return make_response(jsonify({}), 200)


if __name__ == '__main__':
    app.run(debug=True)

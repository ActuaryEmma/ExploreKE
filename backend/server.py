from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://nyakio:password@localhost/ExploreKe'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    content = db.Column(db.Text())
    postDate = db.Column(db.DateTime, default = datetime.datetime.now)

    def __init__(self, title, content):
        self.title = title
        self.content = content

    @property
    def formatted_date(self):
        return self.postDate.strftime("%b %d %Y")
    @property
    def new_date(self):
        return self.postDate.strftime("%b %d")

class ArticleSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'content', 'postDate', 'formatted_date', 'new_date')



article_schema = ArticleSchema()
articles_schema = ArticleSchema(many=True)


@app.route('/get', methods = ['GET'])
def get_articles():
    all_articles = Article.query.all()
    results = articles_schema.dump(all_articles)
    return jsonify(results)

@app.route('/article/<id>/', methods = ['GET'])
def get_article(id):
    article = Article.query.get(id)
    return article_schema.jsonify(article)

@app.route('/add', methods = ['POST'])
def add_article():
    title = request.json['title']
    content = request.json['body']
    articles = Article(title, content)
    db.session.add(articles)
    db.session.commit()
    return article_schema.jsonify(articles)

@app.route('/update/<id>', methods = ['PUT'])
def update_articles(id):
    article = Article.query.get(id)
    title = request.json['title']
    content = request.json['content']

    article.title = title
    article.content = content

    db.session.commit()
    return article_schema.jsonify(article)

@app.route('/delete/<id>', methods = ['DELETE'])
def delete_article(id):
    article = Article.query.get(id)
    db.session.delete(article)
    db.session.commit()
    return article_schema.jsonify(article)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)

#!/usr/bin/python3
""" Database schema for ExploreKe """
from server import db;


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(60), nullable=False)
    email = db.Column(db.String(60), unique=True, nullable=False)
    # password

class Categories(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(60))
    #user_id(foreign_key)

class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    
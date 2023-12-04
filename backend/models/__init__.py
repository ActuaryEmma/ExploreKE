#!/usr/bin/python3
""" Initialize the models package """
from backend.models.engine.db_storage import DBStorage

storage = DBStorage()
storage.reload()
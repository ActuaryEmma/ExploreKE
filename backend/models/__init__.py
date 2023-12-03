#!/usr/bin/python
""" Initialize the models package """
from .engine.db_storage import DBStorage

storage = DBStorage()
storage.reload()
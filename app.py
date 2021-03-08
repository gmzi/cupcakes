from flask import Flask, request, render_template, redirect
from flask.helpers import flash
from models import db, connect_db, Cupcake

app = Flask(__name__)
# 2. Database config:
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
# Other configs:
app.config['SECRET_KEY'] = 'cupcakes'

# 3. Call db:
connect_db(app)

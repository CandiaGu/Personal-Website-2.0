# views.py

from flask import render_template

from app import app

@app.route('/')
def index():
	return render_template("index.html")

@app.route('/projects')
def projects():
	return render_template("projects.html")

@app.route('/portfolio')
def portfolio():
	return render_template("portfolio.html")



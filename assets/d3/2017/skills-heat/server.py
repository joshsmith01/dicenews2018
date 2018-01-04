# -*- coding: utf-8 -*-
from flask import Flask, request, render_template, redirect, url_for
import requests
import json
from hashlib import md5
import os

# for proxy
graph_server = "http://0.0.0.0:5000/wdkg/v1/"


class MyFlask(Flask):
    """
    below to allow rapid dev of js
    """
    def get_send_file_max_age(self, name):
        if name.lower().endswith('.js'):
            return 10
        return Flask.get_send_file_max_age(self, name)

app = MyFlask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True, port=4000, host='0.0.0.0')

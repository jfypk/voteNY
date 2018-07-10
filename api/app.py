import os
from flask import Flask, render_template, url_for, json

app = Flask(__name__)

@app.route("/showdata/<param>", methods=["GET"])
def showdata(param):
    # if request.method == "GET":
        SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
        json_url = os.path.join(SITE_ROOT, "user-data.json")
        data = json.load(open(json_url))
        data = data[param]
        data = json.dumps(data)
        return data

@app.route("/postdata", methods=["POST"])
def postdata():
    print(request.is_json)
    content = request.get_json()
    print(content)
    return 'JSON POSTED'


if __name__ == "__main__":
    app.run()
import os
from flask import Flask, render_template, url_for, json, request

app = Flask(__name__)

@app.route("/data", methods=["GET", "POST"])
def postdata():
    if request.method == "POST":
        content = request.get_json()
        SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
        file = os.path.join(SITE_ROOT, "user-data.json")
        updateJSONFile(content, file)
        return json.dumps(content)
    if request.method == "GET":
        SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
        json_url = os.path.join(SITE_ROOT, "user-data.json")
        data = json.load(open(json_url))
        return json.dumps(data)

def updateJSONFile(newData, file):
    jsonFile = open(file, "r")
    data = json.load(jsonFile)
    jsonFile.close()

    for key, value in newData.items():
        data[key] = value

    jsonFile = open(file, "w+")
    jsonFile.write(json.dumps(data))
    jsonFile.close()



if __name__ == "__main__":
    app.run()
import os
from flask import Flask, render_template, url_for, json, request
from data_dict_template import data_dict 
from populate_form import *

app = Flask(__name__)

#remove the json.. it does nothing for me.

@app.route("/data", methods=["GET", "POST"]) #disable get
def postdata():
    if request.method == "POST":
        content = request.get_json()
        for key, value in content.items():
            data_dict[key] = value
        print(json.dumps(data_dict))
        return "protected"
    #this is for testing purposes. disable in production
    if request.method == "GET": 
        return json.dumps(data_dict)

@app.route("/complete", methods=["GET"])
def fillCompleteForm():
    if request.method == "GET":
        SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
        templateFile = os.path.join(SITE_ROOT, FORM_TEMPLATE_PATH)
        outputFile = os.path.join(SITE_ROOT, FORM_OUTPUT_PATH)
        write_fillable_pdf(templateFile, outputFile, data_dict)
        return "Form complete"
        

#need another route to hit to trigger the pdf creation & email


if __name__ == "__main__":
    app.run()
import os
from flask import Flask, render_template, url_for, json, request
from data_dict_template import data_dict_template 
from populate_form import *
from smtpemail import *

app = Flask(__name__)

#remove the json.. it does nothing for me.
data_dict = data_dict_template

email_subject = "Your NYS Voter Registration Form from VoteNY!"
email_body = "Thanks for using VoteNY!\n\nSimply print out the attached PDF, sign the affadavit, stick a stamp on the envelope and drop it in your local mailbox.\n\nYour vote shapes your future. If you have any questions, simply respond to this email.\n\nBest, Vote NY!"

@app.route("/data", methods=["POST"])
def postdata():
    if request.method == "POST":
        content = request.get_json()
        for key, value in content.items():
            data_dict[key] = value
            print(key + " modified")
        # print(json.dumps(data_dict))
        return "protected"

@app.route("/complete", methods=["GET"])
def fillCompleteForm():
    if request.method == "GET":
        SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
        templateFile = os.path.join(SITE_ROOT, FORM_TEMPLATE_PATH)
        outputFile = os.path.join(SITE_ROOT, FORM_OUTPUT_PATH)
        write_fillable_pdf(templateFile, outputFile, data_dict)
        
        send_mail("votenyapp@gmail.com", data_dict["email"], "Thanks!", "You the best", files=[outputFile])

        os.remove(outputFile)
        print("voterreg form deleted")
        return "Form complete"
        

@app.route("/start", methods=["GET"])
def start():
    if request.method == "GET":
        #how do i reset data_dict to a new blank template at the start? 
        data_dict = data_dict_template
        return "Form started"


if __name__ == "__main__":
    app.run()
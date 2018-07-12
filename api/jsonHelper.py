def updateJSONFile(newData, file):
    jsonFile = open(file, "r")
    data = json.load(jsonFile)
    jsonFile.close()

    for key, value in newData.items():
        data[key] = value

    jsonFile = open(file, "w+")
    jsonFile.write(json.dumps(data))
    jsonFile.close() #this close keeps refreshing the app
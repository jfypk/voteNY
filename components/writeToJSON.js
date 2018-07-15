_onPressYesButton = async () => {
        fetch('http://localhost:5000/data', { //what's the URL..
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "us_citizen_yes": "X",
                "us_citizen_no" : ""
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("USCitizen YES");
            this.props.navigation.navigate('Birthday');
        })
        .catch((error) => {
            console.error(error);
            console.warn(xhr.responseText)
        });
    }
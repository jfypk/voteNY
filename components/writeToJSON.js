_onPressYesButton = async () => {
        fetch('https://voteny-api-heroku.herokuapp.com/data', { //what's the URL..
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
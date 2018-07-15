export const postData = (data, resFunc) => {
    fetch('https://voteny-api-heroku.herokuapp.com/data', { //change URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(resFunc)
    .catch((error) => {
        console.error(error);
    });
}
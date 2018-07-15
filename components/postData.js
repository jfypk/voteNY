export const postData = (data, resFunc) => {
    fetch('http://localhost:5000/data', { //change URL
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
// Asinc and Await
const getTodos = async () => {
    const response = await fetch('mario.json');

    if(response.status !== 200) {
        throw new Error('Cannot fetch the data.');
    }

    const data = await response.json();
    return data;
};

getTodos()
    .then(data => console.log('resolved: ', data))
    .catch(err => console.log('rejected: ', err.message));


// Fetch API
/*
fetch('mario.json').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
});
*/


// XMLHttpRequest Object
/*
const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState === 4) {
                reject('Could not fetch data.');
            }
        });
        
        request.open('GET', resource);
        request.send();
    });
};

getTodos('mario.json').then(data => {
    console.log('promise 1 resolved: ', data);
    return getTodos('shaun.json');
}).then(data => {
    console.log('promise 2 resolved: ', data);
}).catch(err => {
    console.log('promise rejected', err);
});
*/
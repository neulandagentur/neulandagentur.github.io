
    const request =  new XMLHttpRequest();
    request.open('GET', `https://api.github.com/users/neulandagentur/repos`, true);
    request.addEventListener('load', () => {
        let data = null;
        if (request.status > 200 || request.status <= 300) {
            data = JSON.parse(request.responseText);
            data.forEach((repo) => {
                console.log(repo.name);
            })
        } else console.log('error');
    });
    request.send();

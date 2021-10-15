fetch('https://api.github.com/users/jackiedallas/events/public', {headers: {'Authorization': gitHubApi}})
    .then((callForJson)=>{
        return callForJson.json();
    }).then((githubData)=>{
        console.log(githubData)
        // StarWarsData.results.forEach((film)=>{console.log(film.title)})
})

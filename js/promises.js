fetch('https://api.github.com/users/jackiedallas/events/public', {headers: {'Authorization': gitHubApi}})
    .then((callForJson)=>{
        return callForJson.json();
    }).then((githubData)=>{
        console.log(githubData)
    githubData.results
    console.log(githubData[0].created_at)
})


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

wait(3000).then(() => console.log('runs after 3 seconds'));

//linked to the promises lec html
fetch('https://api.github.com/users/jackiedallas/events/public', {headers: {'Authorization': gitHubApi}})
    .then((callForJson)=>{
        return callForJson.json();
    }).then((githubData)=>{
        console.log(githubData[0])
    githubData.results
    console.log(githubData[0].created_at)
    $("#jackie").append("<div class='card'><h2 class='card-title'>" + "Jackie" + "</h2>"
        + "<div class='card-body'><p>" + "Full name: " + githubData[0].actor.login + "</p>"
        + "<p>" + "Push time: " + githubData[0].created_at + "%" + "</p>"
        + "<p>" + "Repo: " + githubData[0].repo.name + "mph" + "</p>"
        + "<p>" + "Commit: " + githubData[0].payload.commits[0].message + "</p></div>")
});


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

wait(3000).then(() => console.log('runs after 3 seconds'));

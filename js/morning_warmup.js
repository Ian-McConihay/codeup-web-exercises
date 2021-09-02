function tellFortune(numKids, partner, loc, jobName){
    var jobName = ['Farmer', 'programmer', 'dicta...?'];
    var loc = ['texas', 'arizona', 'the moon?'];
    var partner = ['emily', 'meg', 'ryan ren....?'];
    var numKids = Math.floor((Math.random() * 3) + 1);
    var newjob = Math.floor(Math.random() * jobName.length);
    var newloc =Math.floor(Math.random() * loc.length);
    var newpartner =Math.floor(Math.random() * partner.length);
    console.log('You will be a ' + jobName[newjob] + ' living around ' + loc[newloc])
    console.log('Ohhh and be married to ' + partner[newpartner] + ' with ' + numKids + ' kids')
    return
}
tellFortune()


// function tellFortune(numKids, partner, geolocation , jobTitle) {
//     var numKids = 5;
//     var partner = 'David Beckham';
//     var geolocation = 'Costa Rica';
//     var jobTitle = 'web developer';
//
//     var future = 'You will be a ' + jobTitle + ' in ' + geolocation + ', and married to ' +
//         partner + ' with ' + numKids + ' kids.';
//     console.log(future);
// }
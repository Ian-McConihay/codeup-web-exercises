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
    var dogAge= Math.floor((Math.random() * 6) + 1);

console.log('You have also acquired a dog!' + ' It looks like he is ' + dogAge + ' years old.')
console.log('Try out the calculateDogAge function!')
console.log('Just type in the function and put your dogs age and then your own age.')
function calculateDogAge(x, y){
    var dogAge = x * 7
    var yourDogAge = 7 * y
    return console.log('Your dog is ' + dogAge + ' in human years and if you were a dog you would be ' + yourDogAge + '!')
    // confirm('What is your gods age?' + x)
}
var hasTacos = ['muffin', 'banna', 'yogurt', 'cereal', 'brisket and egg taco']
var noTacos = ["parfait", 'omelette de frumage', 'protein shake', 'fating']
console.log(hasTacos.includes('taco'))

function tacoTuesday(arr){
    for (var i = 0; i < arr.length; i++){
        if(arr[i].includes('taco')){
            return true;
        }
    }
}

function isTaco(taco){
    return taco.some(word => input.toLowerCase().includes(word.toLowerCase()));
}
var num = 0
function logEvens(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

for (var i=1; i < 20; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

// var order = 'nam khao, pad thai, spring rolls, 3 pieces house roll, iced tea, iced tea';
// var orderAsObject = {
//     orderContent: [“nam khao”, “pad thai”, “spring rolls”, “3 piece house roll”, “iced tea”, “iced tea],
// orderUp: false;
// }
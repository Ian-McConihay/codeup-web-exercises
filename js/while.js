function twos(x) {
    while (x < 65536) {
        x = x * 2
        console.log(x)
    }
}
twos(2)

var allCones = Math.floor(Math.random() * 50) + 50;
var amountSold = Math.floor(Math.random() * 5) + 1;

// while (allCones !== 6) {
//     alert('Need to sell more cones!!')
//
//     if (allCones === 6) {
//         alert('You spld all of the cones!!')
//     }
// }

// var i = 1;

do {
    console.log('Sell more cones!! ' + allCones);

} while (allCones < 100);
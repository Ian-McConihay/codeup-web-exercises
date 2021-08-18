console.log('Cat needs his loops!')
function showMultiplicationTable(num){
    var y = 1;
    var i = 1;
    while (i < 10) {
        console.log( num + ' x ' + y + ' = ' + (num * i));
        i++, y++
    }
}

showMultiplicationTable(7)
//
// var luckyNumber = Math.floor(Math.random() * 100);
// function numberFacts(x) {
//     if (x >= 0 && x % 2 == 0) {
//         console.log( (x + 100) + ' Is positive and even')
//     } else if (x <= 0 && x % 2 == 0) {
//         console.log( (x + 100) + ' Is a Negative number and even')
//     } else if (x >= 0 && x % 2 !== 0 ) {
//         console.log( (x + 100) + ' Is positive and odd')
//     } else if (x <= 0 && x % 2 !== 0) {
//         console.log( (x + 100) + ' Is a Negative number and odd')
//     }
// }
// numberFacts(luckyNumber)

// for (var i = 0; i < 10; i++ ) {
// if (i === i) {
//     console.log(i + '' + i)
// }
// }

for (var i = 1; i < 10; i++ ) {
    var num = i
    for (var y = 1; y < i; y++){
        num = num + '' + i
    }
    console.log(parseInt(num))
}

for (var i = 100; i >= 5; i -= 5 ) {
    console.log(i)
}
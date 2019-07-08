function pasanganTerbesar(num) {
    // you can only write your code here!
    var numString = String(num).split('');
    var max = Math.max.apply(null, numString);
    max = String(max);
    var index = numString.indexOf(max) + 1;
    var next = numString[index];
    var res = max + next;
    return parseInt(res);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
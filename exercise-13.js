function targetTerdekat(arr) {
    // you can only write your code here!
   var indexO = arr.indexOf('o');
   var range = 0;
   var nearestTarget = arr.length;

   if (arr.indexOf('x') === -1) {
       return 0;
   }

   for (var i = 0; i <= arr.length - 1; i++) {
       if (arr[i] === 'x') {
           range = Math.abs(i - indexO);
           if (range < nearestTarget) {
               nearestTarget = range;    
           }
       }
   }
   return nearestTarget;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
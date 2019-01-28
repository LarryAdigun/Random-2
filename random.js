var array = [2,3,4,5];
var array1 = [4,3,3,1];
var array2 = [5,2,3,1];
var i;
var sum = 0;

for(i = 0; i < array.length; i++) {console.log( array[i] * array1[i] * array2[i])}

for (i = 0; i < array.length; i++) { sum += (array[i] * array1[i] *array2[i]);}
console.log(sum);
﻿function reverseNumber(n) {
    n += "";
    return n.split("").reverse().join("");
}
console.log(reverseNumber(3235256));
function reverseString(s) {
    return s.split("").reverse("").join("");
}
console.log(reverseString("Tenet"));

function notRepetable(n) {
    var arra1 = n.split("");
    var result = "";
    var ctr = 0; 
    for (var x = 0; x < arra1.length; x++) {
        ctr = 0;

        for (var y = 0; y < arra1.length; y++) {
            if (arra1[x] === arra1[y]) {
                ctr += 1;
            }
        }

        if (ctr < 2) {
            result = arra1[x];
            break;
        }
    }
    return result;
}
console.log(notRepetable("aabbcctdd"));

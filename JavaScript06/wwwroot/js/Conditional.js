﻿a = -5;
b = -2;
c = -6;
d = 0;
f = -1;
if (a > b && a > c && a > d && a > f) {
    console.log(a);
}
else if (b > a && b > c && b > d && b > f) {
    console.log(b);
}
else if (c > a && c > b && c > d && c > f) {
    console.log(c);
}
else if (d > a && d > c && d > b && d > f) {
    console.log(d);
}
else {
    console.log(f);
}

for (let n = 1; n <= 100; n++) {
    let output = "";

    if (n % 3 == 0) {
        output += "Fizz"
    }
    if (n % 5 == 0) {
        output += "Buzz";
    }

    console.log(output ||n );
}
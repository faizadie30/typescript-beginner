"use strict";
var month;
(function (month) {
    month[month["jan"] = 1] = "jan";
    month[month["feb"] = 2] = "feb";
    month[month["mar"] = 3] = "mar";
    month[month["apr"] = 4] = "apr";
    month[month["mei"] = 5] = "mei";
})(month || (month = {}));
/* get all data */
console.log(month);
/* get 1 data */
console.log(month[1]);

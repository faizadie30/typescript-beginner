"use strict";
/* example function normal */
/* T disini menandakan generic function dan ga harus huruf t bisa z bisa lainnya */
function getData(value) {
    return value;
}
console.log(typeof getData(123), ": ", getData(123));
console.log(typeof getData("123"), ": ", getData("123"));
/* example with arrow function */
const getUsername = (value) => {
    return value;
};
console.log(typeof getUsername("faizadie"), ": ", getUsername("faizadie"));
console.log(typeof getUsername(123), ": ", getUsername(123));

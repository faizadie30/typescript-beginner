"use strict";
function getName() {
    return "my name is faiz,";
}
function getUmur() {
    return 20;
}
function jabatan() {
    console.log("spidi");
}
jabatan();
const namaSaya = getName();
const age = getUmur();
console.log(namaSaya, "umur saya: ", age);
/* arguments function */
function multiply(params1, params2) {
    return params1 * params2;
}
const resMultiply = multiply(502, 2);
console.log(resMultiply);
const evalNumber = (val1, val2 = 100) => {
    return val1 + val2;
};
const tambahAngka = evalNumber(1, 2);
console.log(tambahAngka);
const kurang = (val1, val2 = 1) => {
    return val1 - val2;
};
const resKUrang = kurang(100, 2);
console.log(resKUrang);

"use strict";
class Acer {
    constructor(name, isGaming, keyboardLight) {
        this.name = name;
        this.isGaming = isGaming;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
class Asus {
    constructor(name, isGaming, keyboardLight) {
        this.name = name;
        this.isGaming = isGaming;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
let acer = new Acer("aspire", true, false);
console.log("acer on:", acer.on());

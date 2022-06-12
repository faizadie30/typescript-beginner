"use strict";
class dataUser {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
let userAction = new dataUser();
userAction.add(1);
userAction.addMultiple(1, 3, "4", "6", "9");
console.log("listAll:", userAction.getAll());

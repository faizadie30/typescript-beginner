"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
/* example 1 */
class User {
    constructor(name) {
        this.name = "";
        this.name = name;
    }
}
exports.User = User;
let user = new User("jajang");
console.log("result:", user);
/* function turunan with extends */
/* SUPER constructor: fungsinya nambahin object/value baru di dalam class yang di overide */
/* setter digunakan biasanya sebagai validasi */
/* getter mengambil data pada sebuah kelas */
class Admin extends User {
    constructor(name, phoneNumber) {
        super(name);
        this.read = true;
        this.write = true;
        /* function private use setter and getter */
        this.email = "";
        this.phoneNumber = phoneNumber;
    }
    static getNameRole() {
        return "admins";
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
            email: this.email,
        };
    }
    set _email(value) {
        if (value.length < 5) {
            this.email = "error";
        }
        else {
            this.email = value;
        }
    }
    get _email() {
        return this.email;
    }
}
/* static property and method */
Admin.getRoleName = "admin";
let adminRoles = new Admin("jajang", "081383963619");
adminRoles._email = "jajang";
let nameRole = Admin.getRoleName;
let roleName = Admin.getNameRole();
console.log(nameRole);
console.log(roleName);
console.log("role admin response:", adminRoles);

/* example 1 */
export class User {
  public name: string = "";

  constructor(name: string) {
    this.name = name;
  }
}

let user = new User("jajang");
console.log("result:", user);

/* function turunan with extends */
/* SUPER constructor: fungsinya nambahin object/value baru di dalam class yang di overide */
/* setter digunakan biasanya sebagai validasi */
/* getter mengambil data pada sebuah kelas */

class Admin extends User {
  read: Boolean = true;
  write: Boolean = true;
  phoneNumber: string | number;

  /* function private use setter and getter */
  private email: string = "";

  /* static property and method */
  static getRoleName: string = "admin";

  static getNameRole() {
    return "admins";
  }

  constructor(name: string, phoneNumber: string | number) {
    super(name);
    this.phoneNumber = phoneNumber;
  }

  getRole(): { read: Boolean; write: Boolean; email: string } {
    return {
      read: this.read,
      write: this.write,
      email: this.email,
    };
  }

  set _email(value: string) {
    if (value.length < 5) {
      this.email = "error";
    } else {
      this.email = value;
    }
  }

  get _email(): string {
    return this.email;
  }
}

let adminRoles = new Admin("jajang", "081383963619");
adminRoles._email = "jajang";
let nameRole = Admin.getRoleName;
let roleName = Admin.getNameRole();
console.log(nameRole);
console.log(roleName);
console.log("role admin response:", adminRoles);

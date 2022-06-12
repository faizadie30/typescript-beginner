/* type string */
let nama: string;
nama = "jajang";

console.log("nama:", nama);

/* type number */
let umur: number;
umur = 40;
console.log("umur:", umur);

/* type boolean */
let status_kehadiran: boolean;
status_kehadiran = false;
console.log("status kehadiran:", status_kehadiran);

/* type any is flexible type data*/
let jurusan: any;
jurusan = "rpl";
jurusan = 1;

console.log("jurusan:", jurusan);

/* result all */
const siswa = {
  nama,
  umur,
  status_kehadiran,
  jurusan,
};
console.log("data siswa:", siswa);

/* union type */
let phoneNumber: number | string;
phoneNumber = "08138392";
console.log("phone number:", phoneNumber);

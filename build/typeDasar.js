"use strict";
/* type string */
let nama;
nama = "jajang";
console.log("nama:", nama);
/* type number */
let umur;
umur = 40;
console.log("umur:", umur);
/* type boolean */
let status_kehadiran;
status_kehadiran = false;
console.log("status kehadiran:", status_kehadiran);
/* type any is flexible type data*/
let jurusan;
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
let phoneNumber;
phoneNumber = "08138392";
console.log("phone number:", phoneNumber);

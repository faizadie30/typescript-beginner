/* pembeda sama type data 1an, cuma ditambahin [] */

/* type array number*/
let umurUser: number[];
umurUser = [25, 10, 25];
console.log("umurUser:", umurUser);

/* type array string */
let namaUser: string[];
namaUser = ["udin", "jajang", "samsul"];
console.log("namaUser:", namaUser);

/* type array boolean */
let statusUser: boolean[];
statusUser = [true, false, false];
console.log("statusUser:", statusUser);
/* type array any */

let joinedCommunity: any[];
joinedCommunity = [true, "pencak silat", 3];
console.log("joinedCommunity:", joinedCommunity);

/* tupples type in array*/
/* penjelasan: tupples dipake buat define array dengan max length dan type data yang sudah pasti */
let biodataSiswa: [string, number, string];
biodataSiswa = [
  "jajang",
  25,
  "jalan kencana bersama sama",
]; /* jadi maksimal 3data dengan string, number, string */
console.log("biodataSiswa:", biodataSiswa);

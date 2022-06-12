function getName(): string {
  return "my name is faiz,";
}

function getUmur(): number {
  return 20;
}

function jabatan(): void {
  console.log("spidi");
}

jabatan();
const namaSaya = getName();
const age = getUmur();
console.log(namaSaya, "umur saya: ", age);

/* arguments function */
function multiply(params1: number, params2: number): number {
  return params1 * params2;
}

const resMultiply = multiply(502, 2);
console.log(resMultiply);

/* function as type with default params*/
type tambahType = (val1: number, val2: any) => number;
const evalNumber: tambahType = (val1: number, val2: any = 100): number => {
  return val1 + val2;
};

const tambahAngka = evalNumber(1, 2);
console.log(tambahAngka);

/* function as type with optional params*/
type typeKurang = (val1: number, val2: any) => number;
const kurang: typeKurang = (val1, val2: any = 1): number => {
  return val1 - val2;
};

const resKUrang = kurang(100, 2);
console.log(resKUrang);

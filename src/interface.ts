interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Acer implements Laptop {
  name: string;
  isGaming: boolean;
  keyboardLight: boolean;

  constructor(name: string, isGaming: boolean, keyboardLight: boolean) {
    this.name = name;
    this.isGaming = isGaming;
    this.keyboardLight = keyboardLight;
  }

  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("mati");
  }
}

class Asus implements Laptop {
  name: string;
  isGaming: boolean;
  keyboardLight: boolean;

  constructor(name: string, isGaming: boolean, keyboardLight: boolean) {
    this.name = name;
    this.isGaming = isGaming;
    this.keyboardLight = keyboardLight;
  }

  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("mati");
  }
}

let acer = new Acer("aspire", true, false);
console.log("acer on:", acer.on());

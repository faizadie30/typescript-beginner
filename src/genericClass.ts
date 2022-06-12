class dataUser<T> {
  private data: T[];
  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

let userAction = new dataUser<Number | string>();
userAction.add(1);
userAction.addMultiple(1, 3, "4", "6", "9");
console.log("listAll:", userAction.getAll());

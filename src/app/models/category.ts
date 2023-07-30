import {Product} from "@app/models/product";

export class Category {
  private _id: number
  private _name: string
  private _products: Product[] = []

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  addProduct(product: Product) {
    this._products.push(product)
  }

  getProduct(sku: string) {
    return this._products.find(p => p.sku === sku)
  }

  searchProduct(name: string) {
    return this._products.filter(p => p.name.includes(name))
  }

  removeProduct(sku: string) {
    let index = this._products.indexOf(<Product>this.getProduct(sku))
    this._products.splice(index, 1)
  }

  get products(): Product[] {
    return [...this._products];
  }
}

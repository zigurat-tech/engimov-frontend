import {Category} from "@app/models/category";

export class Product {
  private _image: string
  private _name: string
  private _description: string
  private _price: number
  private _sku: string
  private _visible: boolean
  private _category: Category

  constructor(image: string, name: string, description: string, price: number, sku: string, visible: boolean, category: Category) {
    this._image = image;
    this._name = name;
    this._description = description;
    this._price = price;
    this._sku = sku;
    this._visible = visible;
    this._category = category;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get sku(): string {
    return this._sku;
  }

  set sku(value: string) {
    this._sku = value;
  }

  get visible(): boolean {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
  }

  get category(): Category {
    return this._category;
  }

  set category(value: Category) {
    this._category = value;
  }
}
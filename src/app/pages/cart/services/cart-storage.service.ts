import {Injectable} from '@angular/core';
import {Product} from "@app/models/product";

@Injectable({
  providedIn: 'root'
})
export class CartStorageService {
  private _loadingCart = true
  private _productList: Product[] = []
  private _total = 0

  constructor() {
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  get loadingCart(): boolean {
    return this._loadingCart;
  }

  set loadingCart(value: boolean) {
    this._loadingCart = value;
  }

  get productList(): Product[] {
    return this._productList;
  }

  set productList(value: Product[]) {
    this._productList = value;
  }

  add = (prod: Product) => this._productList.push(prod)

  update = (prod: Product) => this._productList[this.getIndex(prod.sku)].quantity = prod.quantity

  waiting = (prod: Product) => this._productList[this.getIndex(prod.sku)].waiting = prod.waiting
  getIndex = (sku: string) =>
    this._productList.indexOf(this._productList.find(prod => prod.sku === sku)!)
  getProduct = (sku: string) => this._productList[this.getIndex(sku)]
  // remove = (prod: Product) => this._productList.splice(this._productList.indexOf(prod), 1)
  remove = (sku: string) => this._productList.splice(this.getIndex(sku), 1)
  exists = (sku: string) => this._productList.every(prod => prod.sku === sku)
}

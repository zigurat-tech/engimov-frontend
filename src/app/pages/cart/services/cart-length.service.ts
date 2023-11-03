import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartLengthService {

  constructor() {
  }

  private _cartLength = new BehaviorSubject<number>(0);

  getCartLength(): Observable<number> {
    return this._cartLength.asObservable()
  }

  setCartLength(value: number) {
    this._cartLength.next(value)
  }
}

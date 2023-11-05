import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {
  }

  private _image = new BehaviorSubject<string>('');
  private _title = new BehaviorSubject<string>('');
  private _subtitle = new BehaviorSubject<string>('');
  private _loading = new BehaviorSubject<boolean>(false);
  public _show_hero = new BehaviorSubject<boolean>(true);
  public title = ''

  get_show_hero(): Observable<any> {
    return this._show_hero.asObservable()
  }

  set_show_hero(value: boolean) {
    this._show_hero.next(value)
  }

  get_image(): Observable<any> {
    return this._image.asObservable();
  }

  set_image(value: string) {
    this._show_hero.next(true)
    this._image.next(value)
  }

  get_title(): Observable<any> {
    return this._title.asObservable();
  }

  set_title(value: string) {
    this._title.next(value)
  }

  get_subtitle(): Observable<any> {
    return this._subtitle.asObservable();
  }

  set_subtitle(value: string) {
    this._subtitle.next(value)
  }

  get_loading(): Observable<any> {
    return this._loading.asObservable();
  }

  set_loading(value: boolean) {
    this._loading.next(value)
  }
}

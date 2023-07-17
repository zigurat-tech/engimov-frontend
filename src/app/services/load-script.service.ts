import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadScriptService {

  constructor() {
  }

  loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }
}

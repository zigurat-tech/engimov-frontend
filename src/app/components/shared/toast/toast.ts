export class Toast {
  private _showToast = false
  private _classes = ''
  private _headToast = ''
  private _messageToast = ''
  private _id: number

  constructor(classes: string, headToast: string, messageToast: string, showToast = true) {
    this._showToast = showToast;
    this._classes = classes;
    this._headToast = headToast;
    this._messageToast = messageToast;
    this._id = new Date().getTime()
  }

  get showToast(): boolean {
    return this._showToast;
  }

  get classes(): string {
    return this._classes;
  }

  get headToast(): string {
    return this._headToast;
  }

  get messageToast(): string {
    return this._messageToast;
  }

  set showToast(value: boolean) {
    this._showToast = value;
  }

  set classes(value: string) {
    this._classes = value;
  }

  set headToast(value: string) {
    this._headToast = value;
  }

  set messageToast(value: string) {
    this._messageToast = value;
  }

  get id(): number {
    return this._id;
  }
}

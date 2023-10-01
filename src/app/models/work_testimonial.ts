export class WorkTestimonial {
  private _id: number
  private _work: number
  private _name: string
  private _link: string | null
  private _testimonial: string


  constructor(id: number, work: number, name: string, link: string | null, testimonial: string) {
    this._id = id;
    this._work = work;
    this._name = name;
    this._link = link;
    this._testimonial = testimonial;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get work(): number {
    return this._work;
  }

  set work(value: number) {
    this._work = value;
  }

  get link(): string | null {
    return this._link;
  }

  set link(value: string | null) {
    this._link = value;
  }

  get testimonial(): string {
    return this._testimonial;
  }

  set testimonial(value: string) {
    this._testimonial = value;
  }
}

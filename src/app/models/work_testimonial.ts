export class WorkTestimonial {
  private _id: number
  private _work: string
  private _link: string | null
  private _testimonial: string

  constructor(id: number, work: string, link: string | null, testimonial: string) {
    this._id = id;
    this._work = work;
    this._link = link;
    this._testimonial = testimonial;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get work(): string {
    return this._work;
  }

  set work(value: string) {
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

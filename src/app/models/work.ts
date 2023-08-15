import {WorkCategory} from "@app/models/work_category";
import {WorkTestimonial} from "@app/models/work_testimonial";

export class Work {
  private _id: number
  private _category: WorkCategory
  private _name: string
  private _description: string
  private _image: string
  private _testimonials: WorkTestimonial[]

  constructor(id: number, category: WorkCategory, name: string,
              description: string, image: string, testimonials: WorkTestimonial[]) {
    this._id = id;
    this._category = category;
    this._name = name;
    this._description = description;
    this._image = image;
    this._testimonials = testimonials;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get category(): WorkCategory {
    return this._category;
  }

  set category(value: WorkCategory) {
    this._category = value;
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

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get testimonials(): WorkTestimonial[] {
    return this._testimonials;
  }

  set testimonials(value: WorkTestimonial[]) {
    this._testimonials = value;
  }
}

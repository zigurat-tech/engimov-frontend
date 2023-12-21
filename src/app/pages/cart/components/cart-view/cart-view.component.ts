import {Component, OnInit} from '@angular/core';
import {CartService} from "@app/pages/cart/services/cart.service";
import {Product} from "@app/models/product";
import {CartStorageService} from "@app/pages/cart/services/cart-storage.service";
import {Category} from "@app/models/category";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "@app/services/alert.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  form: FormGroup
  loading = false;
  paymentErrorMessage = ''

  constructor(private cartService: CartService, public cartStorageService: CartStorageService,
              private fb: FormBuilder, private alertService: AlertService, private translateService: TranslateService) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(255)]],
      apellidos: ['', [Validators.required, Validators.maxLength(255)]],
      correo: ['', [Validators.required, Validators.email]],
      telefono_comprador: ['', [Validators.required, Validators.maxLength(20)]],
      detalles_direccion: ['', [Validators.required, Validators.maxLength(500)]],
    })
  }

  loadCart(): void {

    if (!this.cartStorageService.productList.length)
      this.cartService.details().subscribe({
        next: (v) => {
          v.result.product_list.forEach((p: any) => {
            console.log(p)
            this.cartStorageService.add(new Product(p.image, p.name,
              p.description, p.price, p.sku, p.visible, new Category(p.category.id, p.category.name),
              p.short_description, p.stock, p.in_cart))
          })
          this.cartStorageService.loadingCart = false
          console.log(v)
        },
        error: err => {
          console.log(err)
        }
      })
    else
      this.cartStorageService.loadingCart = false
  }

  emptyCart = () => this.cartService.clear().subscribe({
    next: value => {
      this.cartStorageService.productList = []
    },
    error: err => {
      console.log(err)
    }
  })

  ngOnInit(): void {
    this.loadCart()
    this.updateTranslations()
    this.translateService.onLangChange.subscribe(v => this.updateTranslations())
  }

  updateTranslations() {
    this.translateService.get('paymentError')
      .subscribe(v => this.paymentErrorMessage = v)
  }

  pay($event: any) {
    this.loading = !this.loading
    console.log(this.form.value)
    this.cartService.pay(this.form.value).subscribe({
      next: (v: any) => {
        location.replace(v.payment_link)
        this.loading = !this.loading
      },
      error: e => {
        console.log(e.status)
        this.alertService.errorNotification(this.paymentErrorMessage)
        this.emptyCart()
        this.loading = !this.loading
      }
    })
  }
}

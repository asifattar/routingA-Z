import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { iproduct } from '../../interface/iproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  pData: Array<iproduct> = []
  selectedProd !: number

  constructor(private _ProductsService: ProductsService,
    private _router: Router) {
  }

  gotoUsers() {
    this._router.navigate(['/users'])
  }

  gotoDashborad() {
    this._router.navigate([''])
  }

  ngOnInit(): void {
    this.pData = this._ProductsService.getallProduct()
    console.log(this.pData);
    this.selectedProd = this.pData[0].id
  }
}

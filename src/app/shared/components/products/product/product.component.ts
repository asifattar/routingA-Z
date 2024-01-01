import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iproduct } from 'src/app/shared/interface/iproduct';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  prodObj !: iproduct ;
  selectedProdId!: number;

  constructor(
    private _productService : ProductsService ,
    private _route : ActivatedRoute ,
    private _router : Router) { }

  ngOnInit(): void {
    this.selectedProdId = +this._route.snapshot.params['id'];
    this.prodObj = this._productService.getSelectedProd(this.selectedProdId)!
    console.log(this.prodObj);
    


  }

  canEdit() {
    this._router.navigate(['/products', this.selectedProdId , 'edit'],
    {queryParamsHandling : 'preserve'})
    throw new Error('Method not implemented.');
  }







}

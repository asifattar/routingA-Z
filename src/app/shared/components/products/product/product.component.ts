import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { iproduct } from 'src/app/shared/interface/iproduct';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  prodObj !: iproduct ;
  selectedProdId!: number ;
  btndisabled !: number ;

  constructor(
    private _productService : ProductsService ,
    private _route : ActivatedRoute ,
    private _router : Router) { }

  ngOnInit(): void {
    // this.selectedProdId = +this._route.snapshot.params['id'];\
    this._route.params
    .subscribe((params : Params) => {
      this.selectedProdId = +params['id']      
      this.prodObj = this._productService.getSelectedProd(this.selectedProdId)!
      this.btndisabled = this.prodObj.canReturn ;
    })

    console.log(this.prodObj);
  }

  canEdit() {
    this._router.navigate(['/products', this.selectedProdId , 'edit'],
    {queryParamsHandling : 'preserve'})
  }







}

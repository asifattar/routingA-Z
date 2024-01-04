import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { iproduct } from 'src/app/shared/interface/iproduct';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  prodObj !: iproduct
  canEdit: number = 1;
  prodID !: number
  canReturn !: number
  prodId: any;


  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _productService: ProductsService) { }

  ngOnInit(): void {
    this.prodID = +this._route.snapshot.params['id'];
    console.log(this.prodID);
    this.prodObj = this._productService.getSelectedProd(this.prodID)!
    console.log(this.prodObj);
    this._route.queryParams
      .subscribe((res: Params) => {
        console.log(res);
        this.canEdit = +res['canEdit']
      })
  }


  onUpdate() {
    // Create a new object with updated values
    const updatedValues: iproduct = {
      id: this.prodObj.id, // Include the id property
      name: this.prodObj.name,
      brand: this.prodObj.brand,
      price: this.prodObj.price,
      spec: {
        camera: this.prodObj.spec.camera,
        frontCamera: this.prodObj.spec.frontCamera,
        backCamera: this.prodObj.spec.backCamera,
        processor: this.prodObj.spec.processor,
        battery: this.prodObj.spec.battery,
        display: this.prodObj.spec.display,
        ram: this.prodObj.spec.ram,
        rom: this.prodObj.spec.rom,
      },
      imageUrl: this.prodObj.imageUrl,
      isAvailable: this.prodObj.isAvailable,
      canReturn: this.prodObj.canReturn,
    };
    console.log(updatedValues);

    // You can now use `updatedValues` to send to your update service
    this._productService.updateProdInfo(updatedValues);

    this._router.navigate(['/products', this.prodID]);
  }
}

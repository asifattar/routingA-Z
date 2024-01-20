// import { Component, OnInit } from '@angular/core';
// import { iproduct } from 'src/app/shared/interface/iproduct';

// @Component({
//   selector: 'app-prod-form',
//   templateUrl: './prod-form.component.html',
//   styleUrls: ['./prod-form.component.scss']
// })
// export class ProdFormComponent implements OnInit {


//   prodObj : any 

//   constructor() { }

//   ngOnInit(): void {
//   }

//   onadd() {

//   }

// }

import { Component, OnInit } from '@angular/core';
import { iproduct } from 'src/app/shared/interface/iproduct';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss']
})
export class ProdFormComponent implements OnInit {

  prodObj: iproduct = {
    id: 0, // Assign a unique identifier (you might handle this differently based on your application)
    name: '',
    brand: '',
    price: 0,
    spec: {
      camera: '',
      frontCamera: '',
      processor: '',
      battery: '',
      display: '',
      ram: '',
      rom: '',
      backCamera: 0,
    },
    imageUrl: '',
    isAvailable: true,
    canReturn: 0,
  };

  constructor() { }

  ngOnInit(): void {
  }

  onadd() {
    // Access the data in this.prodObj, you can log it or send it to a service/API
    console.log('Product Object:', this.prodObj);
  }
}





export interface iproduct {
    id: number;
    name: string;
    brand: string;
    price: number;
    spec: {
      camera: string;
      frontCamera: string;
      processor: string;
      battery: string;
      display: string;
      ram : string ;
      rom : string ;
      backCamera : number ;
    };
    imageUrl: string;
    isAvailable: boolean;
    canReturn : number
  }











  export interface Environment {
    production: boolean;
    firebase: {
      apiKey: string;
      authDomain: string;
      projectId: string;
      storageBucket: string;
      messagingSenderId: string;
      appId: string;
    };
  }
  
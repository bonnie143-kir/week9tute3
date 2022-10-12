export interface ProdModel {
    _id?: string;  // allows us to use the delete operator
    name: string;
    price: number;
    company: string;
  }
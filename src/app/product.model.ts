export class Product {
  name: string;
  sku: string;
  imageUrl: string;
  departments: string[];
  price: number;

  constructor(name: string, sku: string, imageUrl:string, deparments: string[], price: number) {
    this.name = name;
    this.sku = sku;
    this.imageUrl = imageUrl;
    this.departments = deparments;
    this.price = price;
  }
}

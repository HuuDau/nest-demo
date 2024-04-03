import { Injectable } from "@nestjs/common";
import { ProductDto } from "src/dto/product.dto";
import { Product } from "src/models/product.model";

@Injectable()
export class AuthService {
  private products: Product[] = [
    { id: 1, categoryId: 1, productName: 'product 1', price: 100 },
    { id: 2, categoryId: 2, productName: 'product 2', price: 200 }
  ]

  getProducts(): Product[] {
    return this.products
  }
  updateProducts(): Product[] {
    return this.products
  }

  detailProducts(id: number): Product {
    return this.products.find(product => product.id === Number(id))
  }
  createProducts(param: ProductDto): Product {
    console.log(param, 'params')
    const product: Product = {
      id: this.products.length + 1,
      ...param
    }
    this.products.push({ id: this.products.length + 1, ...param })
    return product
  }
}

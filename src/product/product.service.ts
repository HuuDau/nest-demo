import { Injectable } from "@nestjs/common";
import { ProductDto } from "src/dto/product.dto";
import { Product } from "src/models/product.model";

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, categoryId: 1, productName: 'product 1', price: 100 },
    { id: 2, categoryId: 2, productName: 'product 2', price: 200 }
  ]

  getProducts(): Product[] {
    return this.products
  }
  updateProducts(productDto: ProductDto, id: number): Product {
    const index = this.products.findIndex(product => product.id === Number(id))
    this.products[index].categoryId = productDto.categoryId;
    this.products[index].productName = productDto.productName;
    this.products[index].price = productDto.price;
    return this.products[index]
  }

  detailProducts(id: number): Product {
    return this.products.find(product => product.id === Number(id))
  }

  createProducts(productDto: ProductDto): ProductDto {
    console.log(productDto, 'params')
    const product: Product = {
      id: this.products.length + 1,
      categoryId: productDto.categoryId,
      productName: productDto.productName,
      price: productDto.price
    }
    return product
  }

  deleteProducts(id: number): Product {
    const index = this.products.findIndex(product => product.id === Number(id))
    if (index !== -1) {
      this.products.splice(index, 1)
      return this.products[index]
    } else {
      return null
    }

  }
}

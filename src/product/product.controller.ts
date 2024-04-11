import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ResponData } from "src/global/globalClass";
import { HttpMessage, HttpStatus as statusHttp } from "src/global/globalEnum";
import { Product } from "src/models/product.model";
import { ProductDto } from "src/dto/product.dto";

@Controller('product2')
export class ProductController {
  constructor(private readonly dataService: ProductService) { }
  @Get("list-data")
  getProduct(): ResponData<Product[]> {
    try {
      return new ResponData<Product[]>(this.dataService.getProducts(), statusHttp.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponData<Product[]>(null, statusHttp.ERROR, HttpMessage.ERROR);
    }

  }

  @Get(":id")
  detailProduct(@Param('id') id: number): ResponData<Product> {
    try {
      return new ResponData<Product>(this.dataService.detailProducts(id), statusHttp.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponData<Product>(null, statusHttp.ERROR, HttpMessage.ERROR);
    }

  }

  @Put('update-product/:id')
  updateProduct(@Body() productDto: ProductDto, @Param('id') id: number): ResponData<Product> {
    try {
      return new ResponData<Product>(this.dataService.updateProducts(productDto, id), statusHttp.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponData<Product>(null, statusHttp.ERROR, HttpMessage.ERROR);
    }

  }

  @Post('create-product')
  createProduct(@Body() productDto: ProductDto): ResponData<ProductDto> {
    try {
      return new ResponData<ProductDto>(this.dataService.createProducts(productDto), statusHttp.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponData<ProductDto>(null, statusHttp.ERROR, HttpMessage.ERROR);
    }
  }

  @Delete('delete-product/:id')
  deleteProduct(@Param('id') id: number): ResponData<Product> {
    try {
      return new ResponData<Product>(this.dataService.deleteProducts(id), statusHttp.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponData<Product>(null, statusHttp.ERROR, HttpMessage.ERROR);
    }
  }

}

import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ResponData } from "src/global/globalClass";
import { HttpMessage, HttpStatus as statusHttp } from "src/global/globalEnum";
import { Product } from "src/models/product.model";
import { ProductDto } from "src/dto/product.dto";

@Controller('product2')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Get("list-data")
  getProduct(): ResponData<Product[]> {
    try {
      return new ResponData<Product[]>(this.authService.getProducts(), statusHttp.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponData<Product[]>(null, statusHttp.ERROR, HttpMessage.ERROR);
    }

  }

  @Get(":id")
  detailProduct(@Param('id') id: number): ResponData<Product> {
    try {
      return new ResponData<Product>(this.authService.detailProducts(id), statusHttp.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponData<Product>(null, statusHttp.ERROR, HttpMessage.ERROR);
    }

  }

  @Post('update-product')
  updateProduct(): ResponData<Product[]> {
    try {
      return new ResponData<Product[]>(this.authService.updateProducts(), statusHttp.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponData<Product[]>(null, statusHttp.ERROR, HttpMessage.ERROR);
    }

  }

  @Post('create-product')
  createProduct(@Body() productDto: ProductDto): ResponData<ProductDto> {
    try {
      return new ResponData<Product>(this.authService.createProducts(productDto), statusHttp.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponData<Product>(null, statusHttp.ERROR, HttpMessage.ERROR);
    }
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  findAll(): any {
    return this.productService.findAll();
  }

  @Post()
  createProduct(@Body() body: CreateProductDto): any {
    const product = this.productService.create(body);
    return product;
  }
}

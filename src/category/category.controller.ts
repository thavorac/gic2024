import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('api/categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  @Get()
  findAll(): any {
    return this.categoryService.findAll();
  }

  @Post()
  createCategory(@Body() body: CreateCategoryDto): any {
    const category = this.categoryService.create(body);
    return category;
  }
}

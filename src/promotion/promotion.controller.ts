import { Body, Controller, Get, Post } from '@nestjs/common';
import { PromotionsService } from './promotion.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';

@Controller('api/promotions')
export class PromotionsController {
  constructor(private readonly promotionService: PromotionsService) {}

  @Get()
  findAll(): any {
    return this.promotionService.findAll();
  }

  @Post()
  createPromotion(@Body() body: CreatePromotionDto): any {
    const promotion = this.promotionService.create(body);
    return promotion;
  }
}

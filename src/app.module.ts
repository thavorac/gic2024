import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './category/category.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { dataBaseConfig } from './database/database.config';
import { PromotionsModule } from './promotion/promotion.module';
import { GroupsModule } from './group/group.module';
import { ProductsModule } from './product/product.module';

@Module({
  imports: [
    SequelizeModule.forRoot(dataBaseConfig),
    CategoriesModule,
    PromotionsModule,
    GroupsModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

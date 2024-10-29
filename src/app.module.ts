import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './category/category.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { dataBaseConfig } from './database/database.config';

@Module({
  imports: [SequelizeModule.forRoot(dataBaseConfig), CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

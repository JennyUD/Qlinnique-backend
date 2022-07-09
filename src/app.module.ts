import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {QlinniqueControllers} from'./controllers/controllers'
import {QlinniqueServices} from './services/services'
import {QlinniqueModule} from './module/module'


@Module({
  imports: [QlinniqueModule],
  providers: [AppService],
  controllers: [AppController],
 
})
export class AppModule {}

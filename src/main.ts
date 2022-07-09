import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
  .setTitle('Qlinnique')
  .setDescription('Online Clinic API')
  .setVersion('4.4.0')
  .addTag('Clinics')
  .build();

  const document =SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api', app, document);
  await app.listen(800);
}
bootstrap();

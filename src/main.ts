import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  const config= new DocumentBuilder()
      .setTitle('Тестовое задание №2')
      .setDescription('Документация')
      .setVersion('1.0.0')
      .addTag('Effective Mobile')
      .build()
  const document= SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document) 
  
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { configFactory } from './config/config.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = configFactory();
  app.enableCors({
    origin: configFactory().get('CORS_ORIGIN'),
  });
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(config.get('SERVER_PORT'));
}
bootstrap();

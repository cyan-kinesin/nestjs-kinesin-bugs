import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  // with express
  //   const app = await NestFactory.create(AppModule);

  // with fastify
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // app.enableVersioning({
  //   type: VersioningType.HEADER,
  //   header: 'Version',
  // });
  await app.listen(3000);
}
bootstrap();

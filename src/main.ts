import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVER_CORE_PORT);
  console.log(`Server started on port ${process.env.SERVER_CORE_PORT}`)
}
bootstrap();

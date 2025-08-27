import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const allowedOrigins: (string | RegExp)[] = [
    'http://localhost:5173',
    'https://gobasera.vercel.app',
    /\.vercel\.app$/,
  ];

  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
  });
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
  await app.listen(port, '0.0.0.0');
  console.log(`Server listening on port ${process.env.PORT || 4000}`);
}
void bootstrap();

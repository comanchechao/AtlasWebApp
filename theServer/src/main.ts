/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';
import { default as Redis } from 'ioredis';
import * as connectRedis from 'connect-redis';
import * as cookieParser from 'cookie-parser';

import { createClient } from 'redis';

const redisClient = createClient({
  legacyMode: true,
});
redisClient.connect().catch(console.error);

const RedisStore = connectRedis(session);
// const redisClient = new Redis();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET, PUT, POST, DELETE , OPTIONS',
    allowedHeaders: '*',
    preflightContinue: false,
    credentials: true,
  });
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    session({
      store: new RedisStore({ client: redisClient, logErrors: true }),
      secret: 'keyboard',
      resave: false,
      saveUninitialized: false,
      cookie: {
        sameSite: true,
        httpOnly: false,
        maxAge: 60000,
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3333);
}
bootstrap();

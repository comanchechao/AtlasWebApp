/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';
import * as redis from 'redis';
import RedisStore from 'connect-redis';

// const RedisStore = connectRedis(session);
// const redisClient = redis.createClient();

const redisClient = redis.createClient();
const redisStore = new RedisStore({
  client: redisClient,
  prefix: 'redisapp',
});

redisClient.connect();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET, PUT, POST, DELETE , OPTIONS',
    allowedHeaders: '*',
    preflightContinue: false,
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    session({
      store: redisStore,
      secret: 'keyboard',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3333);
}
bootstrap();

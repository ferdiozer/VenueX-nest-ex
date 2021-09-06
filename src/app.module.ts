import { Module, Injectable } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module'

import { TypegooseModule } from "nestjs-typegoose";
import { ConfigModule, configFactory } from './config/config.module';
//import { ConfigModule } from '@nestjs/config';

//import configuration from './config/configuration';
//import { PassportModule } from '@nestjs/passport';



//const ENV = process.env.NODE_ENV;
//const mongoDbUrl =process.env.DATABASE_HOST// "mongodb://localhost:27017/nest"
// useNewUrlParser: true
//   ConfigModule.forRoot({ load: [configuration], envFilePath: '.development.env', })
/*

@Module({
  imports: [
    TypegooseModule.forRoot(process.env.NODE_ENV.MONGO_DB_URL),
    ProductsModule,
    ConfigModule.forRoot({ load: [configuration], isGlobal: true })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

*/
@Module({
  imports: [
    ConfigModule,
    //   PassportModule.register({ defaultStrategy: 'bearer' }),
    TypegooseModule.forRootAsync({
      useFactory: () => {
        const config = configFactory();
        //  console.log({ config })
        return {
          uri: config.get('MONGO_URI'),
        };
      },
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

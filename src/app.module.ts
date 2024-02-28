import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { ConnectionOptions } from 'typeorm';
import { CancionModule } from './cancion/cancion.module';
import { CantanteModule } from './cantante/cantante.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CancionModule,
    CantanteModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT), 
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      schema: 'cantante',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
     
      
    } as ConnectionOptions),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


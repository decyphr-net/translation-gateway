import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { PingModule } from './ping/ping.module';

@Module({
  imports: [ConfigModule.forRoot(), PingModule],
  controllers: [AppController],
  providers: [
    {
      provide: 'TRANSLATOR_SERVICE',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: configService.get('TRANSLATOR_SERVICE_HOST'),
            port: configService.get('TRANSLATOR_SERVICE_PORT'),
          },
        }),
    },
  ],
})
export class AppModule {}

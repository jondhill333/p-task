import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PropertyModule } from './properties/properties.module';

@Module({
  imports: [
    PropertyModule,
    MongooseModule.forRoot(
      'replace me with the connection string you were given',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PropertyModule } from './properties/properties.module';

@Module({
  imports: [
    PropertyModule,
    // MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
    MongooseModule.forRoot(
      'mongodb+srv://jon:Kokkini-123@cluster0.xmrjwt0.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

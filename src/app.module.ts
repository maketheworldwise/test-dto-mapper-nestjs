import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CustomModule } from './mappers/custom/custom.module';

@Module({
  imports: [CustomModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

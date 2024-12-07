import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsModule } from './locations/locations.module';
import { NameModule } from './name/name.module';

@Module({
  imports: [LocationsModule, NameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

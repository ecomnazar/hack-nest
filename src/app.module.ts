import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsModule } from './locations/locations.module';
import { NameModule } from './name/name.module';
import { TreeModule } from './tree/tree.module';

@Module({
  imports: [LocationsModule, NameModule, TreeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

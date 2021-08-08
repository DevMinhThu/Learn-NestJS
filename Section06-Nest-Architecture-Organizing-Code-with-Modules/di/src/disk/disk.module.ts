import { Module } from '@nestjs/common';
import { PowerModule } from '../power/power.module';
import { DiskService } from './disk.service';

@Module({
  /* Bước 2:
    - DiskService muốn sử dụng 1 số method của PowerService
    => imports PowerModule vào để có thể truy cập và sử dụng nó được
    => bất cứ thứ gì bên trong DiskModule đều có thể sử dụng bất cứ thứ gì bên trong PowerModule
  */
  imports: [PowerModule],
  providers: [DiskService],
  exports: [DiskService],
})
export class DiskModule {}

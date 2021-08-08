import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  /* 
    - các service liệt kệ trong danh sách providers, chỉ có thể sử dụng bên trong module này.
    - Các module khác không thể truy cập và sử dụng được.
  */
  providers: [PowerService],

  /* Bước 1:
    - sử dụng exports để chia sẻ service cho các module khác sử dụng
  */
  exports: [PowerService],
})
export class PowerModule {}

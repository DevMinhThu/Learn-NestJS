import { Controller, Get } from '@nestjs/common';
import { CpuService } from '../cpu/cpu.service';
import { DiskService } from '../disk/disk.service';

/* 
    - Khi nest tạo instance ComputerController
    => trước tiên nó sẽ tạo ra 2 instance của cpuService và diskService trước
    => từ đó trong controller có thể gọi ra sử dụng các method của 2 service kia
*/

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get()
  run() {
    return [this.cpuService.compute(1, 2), this.diskService.getData()];
  }
}

import { Module } from '@nestjs/common';
import { PowerModule } from '../power/power.module';
import { CpuService } from '../cpu/cpu.service';

@Module({
  imports: [PowerModule],
  providers: [CpuService],
  exports: [CpuService],
})
export class CpuModule {}

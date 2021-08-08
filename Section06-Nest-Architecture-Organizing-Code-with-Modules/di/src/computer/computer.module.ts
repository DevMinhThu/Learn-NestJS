import { Module } from '@nestjs/common';
import { CpuModule } from './../cpu/cpu.module';
import { DiskModule } from './../disk/disk.module';
import { ComputerController } from './computer.controller';

@Module({
  // import là import module, sử dụng là sử dụng service
  imports: [CpuModule, DiskModule],
  controllers: [ComputerController],
})
export class ComputerModule {}

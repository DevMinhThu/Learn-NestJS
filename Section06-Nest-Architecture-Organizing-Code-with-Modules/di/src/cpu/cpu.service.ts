import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log('Drawing 10 watts of power from Power Service');
    this.powerService.supplyPower(10);

    return a + b;
  }
}

/* 
    - Mỗi khi tạo 1 instance của CpuService
    => điều đầu tiên nó sẽ tạo 1 instance powerService và cung cấp nó cho controller của CpuService
    => Vì vậy trong CpuService có thể sử dụng các method của powerService
*/

import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  /* Bước 3: 
    - Truyền service mình muốn sử dụng vào làm đối số của constructor
    => Khi tạo instance của DiskService, nó sẽ tạo ra instance của powerService đầu tiên
    đảm bảo rằng trong DiskService có thể sử dụng được các method có trong powerService
  */
  constructor(private powerService: PowerService) {}

  getData() {
    console.log('Drawing 20 watts of power from Power Service');
    this.powerService.supplyPower(20);
    return 'data!';
  }
}

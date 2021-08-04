import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';

// là 2 class đẫ Injectable
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';

@Module({
  controllers: [MessagesController],
  // providers có thể hiểu là: những thứ có thể được sử dụng làm phụ thuộc cho các lớp khác
  // provider nhận vào là một mảng các phụ thuộc cho các lớp khác
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}

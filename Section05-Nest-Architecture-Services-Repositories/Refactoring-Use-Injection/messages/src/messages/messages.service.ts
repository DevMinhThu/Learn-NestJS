import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

/* 
Injectable: là một cách đánh dấu class này để đăng ký với DI container, 
sau đó chúng sẽ vào class này để tìm tất cả các dependency rồi khởi tạo nó
*/
@Injectable()
export class MessagesService {
  // cú pháp viết nhanh trong typescript
  // class MessagesService sẽ có thuộc tính messagesRepo public vói type là MessagesRepository
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}

import { Controller, Get, Post, Body, Param } from '@nestjs/common';

// file xác thực
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'List Messages';
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    return body;
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    return id;
  }
}

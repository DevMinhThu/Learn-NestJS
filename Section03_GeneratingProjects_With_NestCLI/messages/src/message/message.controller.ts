import { Controller, Get, Post } from '@nestjs/common';

@Controller('message')
export class MessageController {
  @Get()
  listMessages() {
    return 'List Messages';
  }

  @Post()
  createMessages() {
    return 'Create Messages';
  }

  @Get('/:id')
  getMessages() {
    return 'Get Messages By Id';
  }
}

import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'List Messages';
  }

  @Post()
  createMessages(@Body() body: any) {
    return body.content;
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    return id;
  }
}

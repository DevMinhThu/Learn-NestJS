import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  handleGetMethod() {
    return "hi there";
  }
}

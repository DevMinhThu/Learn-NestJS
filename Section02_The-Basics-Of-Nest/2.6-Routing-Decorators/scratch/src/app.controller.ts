import { Controller, Get } from "@nestjs/common";

// localhost:3000/app
@Controller("/app")
export class AppController {
  // localhost:3000/app/hello
  @Get("/hello")
  handleGetMethod() {
    return "hi there";
  }

  // localhost:3000/app/bye
  @Get("/bye")
  getByeThere() {
    return "Bye there";
  }
}

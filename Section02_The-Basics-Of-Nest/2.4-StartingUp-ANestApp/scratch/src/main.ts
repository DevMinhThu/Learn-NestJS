import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

// create controller
@Controller()
class AppController {
  @Get()
  // function xử lý khi cps req là GET
  handleGetMethod() {
    return "hi there";
  }
}

/* Flow
  -> App start 
  -> app module 
  -> tìm tất cả controllers được liệt kê trong "controllers: [AppController]"
  -> tự động tạo một instance của lớp controllers
  -> Sau đó nó đi vào trong class AppController đi qua các decorators và thiết lập root cho trình xử lý cho từng decorator khác nhau
*/

// create module và cho module này biết được controller vừa tạo
@Module({
  // truyền vào tên controller của app
  controllers: [AppController],
})
class AppModule {}

/* create function (giống như khởi tạo server của express)
  - hàm này sẽ chạy, bất cứ khi nào chúng ta start ứng dụng
  - thường theo mặc định, hàm này gọi là "bootstrap" và không đồng bộ
*/
async function bootstrap() {
  // create nest application từ AppModule
  const app = await NestFactory.create(AppModule);

  // port listen
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

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

/* Flow
  -> App start 
  -> app module 
  -> tìm tất cả controllers được liệt kê trong "controllers: [AppController]"
  -> tự động tạo một instance của lớp controllers
  -> Sau đó nó đi vào trong class AppController đi qua các decorators và thiết lập root cho trình xử lý cho từng decorator khác nhau
*/

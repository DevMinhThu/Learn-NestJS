import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

@Module({
  // truyền vào tên controller của app
  controllers: [AppController],
})
export class AppModule {}

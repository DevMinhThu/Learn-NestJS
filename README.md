# Learn-NestJS
NestJS: The Complete Developer's Guide

1. Project Setup:
  npm install 
  - @nestjs/common@7.6.17 : chứa các hàm, lớp ... mà chúng ta cần trong quá trình phát triển.
  - @nestjs/core@7.6.17 
  - @nestjs/platform-express@7.6.17 : Cho phép Nest sử dụng Express JS để xử lý yêu cầu HTTP
  - reflect-metadata@0.1.13 : Giúp cho decorators hoạt động. Nhiều hơn thế nữa về điều này chỉ trong một phút
  - typescript@4.3.2 : Viết Nest apps sử dụng TypeScript.

2. Cấu hình TypeScript:
  - Tạo tsconfig.json
  - ![image](https://user-images.githubusercontent.com/51977303/127457312-3874cf3b-f2c3-43a1-9dc9-f32251a336fe.png)

3. Quy ước đặt tên tệp
  - One class per file (some exceptions)

  - class names should include the kind of thing we are creating

  - name of class and name of file should always match up

  - filename template: name.type_of_thing.ts

  - VD: 
    - app.controller.ts (class AppController{})
    - app.module.ts (class AppModule{})

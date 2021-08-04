import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    // đọc file từ file json
    // hiện tại contents đang là dạng văn bản đơn giản => cần chuyển sang dạng JSON
    const contents = await readFile('messages.json', 'utf8');

    // chuyển sang dạng JSON => JSON.parse(contents)
    const messages = JSON.parse(contents);

    // trả ra tin nhán với id
    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    // trả về tất cả tin nhắn
    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    // create random ID
    const id = Math.floor(Math.random() * 999);

    // gán giá trị id vừa tạo vào thuộc tính id trong messages
    messages[id] = { id, content };

    // chuyển object sang string và ghi lại vào file
    await writeFile('messages.json', JSON.stringify(messages));
  }
}

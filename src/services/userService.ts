import { Service } from 'typedi';

@Service()
export class UserService {
  async listOfUser(userId: string) {
    // โค้ดของการดึงข้อมูลผู้ใช้
    console.log('userId:>', userId);
    return 'xxx'
  }
}
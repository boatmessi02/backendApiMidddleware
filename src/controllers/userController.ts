import { Get, JsonController, Param, QueryParams } from 'routing-controllers';
import { UserService } from '../services';
import { Service } from 'typedi';
import { Container } from 'typedi';

@Service()
@JsonController('/user')
export class UserController {
  private readonly userService: UserService;

  constructor() {
    this.userService = Container.get(UserService);
  }
  
  @Get('/:userId')
  async getListUser(@Param('userId') userId: string, @QueryParams() query: any): Promise<any> {
    try {
      const userList = await this.userService.listOfUser(userId);
      return userList;
    } catch (err) {
      console.error(err, "An error occurred");
    }
  }
}
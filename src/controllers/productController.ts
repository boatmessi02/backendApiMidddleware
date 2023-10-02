import { JsonController, Get } from 'routing-controllers';

@JsonController('/products')
export class ProductsController {
  @Get()
  getUser() {
    return { message: 'ProductsController data' };
  }
}
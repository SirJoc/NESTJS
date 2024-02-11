import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthDto } from './dto/index';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log({ dto });
    return this.userService.signUp(dto);
  }

  @Post('signin')
  signin() {
    return this.userService.signIn();
  }
}

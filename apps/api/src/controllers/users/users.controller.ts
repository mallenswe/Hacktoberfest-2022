import { UserName } from '@hacktoberfest2022/api-interfaces';
import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../../services/Users/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('username')
    getUserName(): UserName {
      return this.usersService.getUserName();
    }
}

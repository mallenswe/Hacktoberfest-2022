import { Injectable } from '@nestjs/common';
import { UserName } from 'libs/api-interfaces/src/lib/users-interfaces';

@Injectable()
export class UsersService {
    getUserName(): UserName {
        return { username: 'Matthew Allen'}
    }
}

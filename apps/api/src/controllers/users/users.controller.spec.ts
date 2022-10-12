import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../../services/Users/users.service';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let users: TestingModule;

  beforeAll(async () => {
    users = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService]
    }).compile();

  });

  describe('getUsername', () => {
    it('should return "Matthew Allen"', () => {
      const usersController = users.get<UsersController>(UsersController);
      expect(usersController.getUserName()).toEqual({ username: 'Matthew Allen' });
    });
  });
});

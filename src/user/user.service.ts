import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from 'src/auth/dto/registerUser.dto';

@Injectable()
export class UserService {
    createUser(registerUserDTO: RegisterUserDto) {
        return { message: 'User created successfully from UserService' };
    }
}

import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterUserDto } from './dto/registerUser.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService { 
    constructor(private readonly userService: UserService   ) {}
    async registerUser(registerUserDTO: RegisterUserDto) {
        console.log('Registering user with data:', registerUserDTO);

        const saltRounds = 10;
        const hash = await bcrypt.hash(registerUserDTO.password, saltRounds);
        console.log('Hashed password:', hash);


        const userCreationResult = this.userService.createUser({...registerUserDTO, password: hash });
        return userCreationResult;
    }
}

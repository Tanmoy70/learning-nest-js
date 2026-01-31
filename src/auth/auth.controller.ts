import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/registerUser.dto';

@Controller('auth') //auth/register
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post('register')
    register(@Body() registerUserDTO: RegisterUserDto) {
        const result = this.authService.registerUser(registerUserDTO);
        return result;
    }
}
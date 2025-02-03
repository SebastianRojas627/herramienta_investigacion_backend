import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  UseGuards,
  Req,
  Headers,
  SetMetadata,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IncomingHttpHeaders } from 'http';

import { AuthService } from './auth.service';
import { RawHeaders, GetUser, Auth } from './decorators';
import { RoleProtected } from './decorators/role-protected.decorator';

import { CreateUserDto, LoginUserDto } from './dto';
import { User } from './entities/user.entity';
import { UserRoleGuard } from './guards/user-role.guard';
import { ValidRoles } from './interfaces';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Patch('update')
  @UseGuards(AuthGuard())
  updateUser(@GetUser('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.update(id, updateUserDto);
  }

  @Get('log-user/:id')
  @Auth(ValidRoles.admin)
  async getLogUser(@Param('id', ParseUUIDPipe) id: string,) {
    const user = await this.authService.getLogUser(id);
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      rank: user.rank,
      email: user.email
    }
  }

  @Patch('role/:id')
  @UseGuards(AuthGuard())
  updateRole(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateRoleDto: UpdateRoleDto,
  ) {
    return this.authService.updateRole(id, updateRoleDto);
  }

  @Get('get-users')
  @Auth(ValidRoles.admin)
  getUsers() {
    return this.authService.getUsers();
  }

  @Get('get-user')
  @UseGuards(AuthGuard())
  getCurrentUser(@GetUser() user: User) {
    return {
      user: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        rank: user.rank,
      },
    };
  }
}

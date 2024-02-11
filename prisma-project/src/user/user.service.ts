import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { AuthDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async signUp(dto: AuthDto): Promise<any> {
    const hash = await argon.hash(dto.password);
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  public signIn() {
    return 'signIn';
  }
}

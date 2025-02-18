import {
  Controller,
  Get,
  Query,
  HttpException,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { SsoService } from './sso.service';

@Controller()
export class AppController {
  constructor(
    @Inject('SsoService')
    private readonly ssoService: SsoService,
  ) {}

  @Get('authExchange')
  async handleCallback(@Query('code') authCode: string): Promise<any> {
    try {
      console.log('AuthCode', authCode);
      const tokens = await this.ssoService.exchangeAuthorizationCode(authCode);
      return tokens;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'Failed to exchange authorization code',
          details: error.response?.data || error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

import { Injectable, Inject } from '@nestjs/common';
import { OidcProvider } from './interfaces';

@Injectable()
export class SsoService {
  constructor(
    @Inject('OidcProvider')
    private readonly oidcProvider: OidcProvider,
  ) {}
  async exchangeAuthorizationCode(authCode: string): Promise<any> {
    return this.oidcProvider.exchangeAuthorizationCode(authCode);
  }
}

import { Module } from '@nestjs/common';
import { SsoService } from './sso.service';
import { AppController } from './app.controller';
import { CognitoProvider } from './cognito-oidc';

@Module({
  controllers: [AppController], // Register SsoController
  providers: [
    {
      provide: 'SsoService',
      useClass: SsoService,
    },
    {
      provide: 'OidcProvider',
      useClass: CognitoProvider,
    },
  ], // Register SsoService
})
export class SsoModule {}

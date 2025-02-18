// providers/cognito-provider.ts
import { OidcProvider } from './interfaces';
import axios from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CognitoProvider implements OidcProvider {
  async exchangeAuthorizationCode(authCode: string): Promise<any> {
    const tokenEndpoint = process.env.COGNITO_TOKEN_ENDPOINT;
    const clientId = process.env.COGNITO_CLIENT_ID;
    const redirectUri = process.env.COGNITO_REDIRECT_URI;
    const scope = 'openid email profile';
    const response = await axios.post(
      tokenEndpoint,
      new URLSearchParams({
        grant_type: 'authorization_code',
        code: authCode,
        redirect_uri: redirectUri,
        client_id: clientId,
        scope: scope,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    );
    console.log('Token response', response);
    return response.data;
  }
}

// interfaces/oidc-provider.interface.ts
export interface OidcProvider {
  exchangeAuthorizationCode(authCode: string): Promise<any>;
}

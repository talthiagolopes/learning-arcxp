import { ENVIRONMENT } from 'fusion:environment';
import getProperties from 'fusion:properties';

// Constants
import { ORGANIZATION, PROD, SANDBOX } from '../constants/environment';

export const env = ENVIRONMENT === ORGANIZATION ? PROD : SANDBOX;
export const isProd = env === PROD;
export const isSandbox = env === SANDBOX;

export const originByEnv = (url, arcSite) => {
   const { websiteDomain } = getProperties(arcSite);
   return isProd  ? siteDomain : isSandbox ? `/pf/${url}/?_website=${arcSite}` : `/pf/${url}/?_website=${arcSite}`
}
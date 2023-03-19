import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Amplify, Auth } from 'aws-amplify';

if (environment.production) {
  enableProdMode();
}

Amplify.configure({
  Auth: {
    region: 'ca-central-1',
    userPoolId: 'ca-central-1_mXT7oFuXG',
    userPoolWebClientId: '2ofpc2lft33nbe2nklbu46rlis',
    authenticationFlowType: 'USER_PASSWORD_AUTH'
  },
  API: {
    endpoints: [
      {
        name: 'VitalXRBackendStack',
        endpoint: 'https://2lexkrigof.execute-api.ca-central-1.amazonaws.com/Stage',
        custom_header: async () => {
          const token = (await Auth.currentSession()).getIdToken().getJwtToken();
          return { Authorization: token }
        }
      }
    ]
  }
})

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

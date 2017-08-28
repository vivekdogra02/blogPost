// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyC43HeBnVY7auTSILIXlDwlBFJZTIGMhJk',
    authDomain: 'blog-75e40.firebaseapp.com',
    databaseURL: 'https://blog-75e40.firebaseio.com',
    projectId: 'blog-75e40',
    storageBucket: 'blog-75e40.appspot.com',
    messagingSenderId: '951130781220'
  }
};

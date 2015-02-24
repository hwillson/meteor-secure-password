Package.describe({
  name: 'hwillson:secure-password',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Secure password generator.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('hwillson:secure-password.js');
  api.export('SecurePassword');
});

Package.onTest(function(api) {
  api.use('tinytest');
  //api.use('hwillson:secure-password');
  api.addFiles('hwillson:secure-password.js');
  api.addFiles('hwillson:secure-password-tests.js');
});

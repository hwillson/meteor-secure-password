Tinytest.add('Generates a random password', function (test) {

  test.isNotNull(
    SecurePassword.generatePassword(),
    'Generate password should not be null'
  );

  test.length(
    SecurePassword.generatePassword(),
    15,
    'Generated password should be 15 characters long'
  );

  test.isTrue(
    SecurePassword.generatePassword().match(/[a-zA-Z0-9]{3}/g).length === 4,
    'Generate password should match the format xxx-xxx-xxx-xxx'
  );

  var password1 = SecurePassword.generatePassword();
  var password2 = SecurePassword.generatePassword();
  test.notEqual(
    password1,
    password2,
    'Generated password should be random'
  );

});

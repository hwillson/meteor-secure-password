Tinytest.add('Generates a random password', function (test) {

  test.isNotNull(
    SecurePassword.generate(),
    'Generate password should not be null'
  );

  test.length(
    SecurePassword.generate(),
    15,
    'Generated password should be 15 characters long'
  );

  test.isTrue(
    SecurePassword.generate().match(/[a-z0-9]{3}/g).length === 4,
    'Generate password should match the format xxx-xxx-xxx-xxx'
  );

  var password1 = SecurePassword.generate();
  var password2 = SecurePassword.generate();
  test.notEqual(
    password1,
    password2,
    'Generated password should be random'
  );

});

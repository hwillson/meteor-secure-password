SecurePassword = (function () {

	// Random length of string characters used to generate the new password.
	var randomStringLength = 12;

	// Allowed password characters.
	var allowedChars =
		'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

	/**
	 * Generate a secure random password.
	 *
	 * @return  {String}  Random password using the format xxx-xxx-xxx-xxx.
	 */
	var generatePassword = function () {
		return randomString().match(/.../g).join('-');
	};

	/**
	 * Generate a random string used to build the new password.
	 *
	 * @return  {String}  Random string with length randomStringLength, built
	 *                    using allowedChars array.
	 */
	var randomString = function () {
		var randomString = '', i;
    for (i = 0; i < randomStringLength; i += 1) {
			randomString +=
				allowedChars[Math.round(Math.random() * (allowedChars.length - 1))];
		}
    return randomString;
	};

	return {
		generatePassword: generatePassword
	};

}());

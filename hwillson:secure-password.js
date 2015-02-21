SecurePassword = {

	/**
	 * Generate a secure random password.
	 *
	 * @return  {String}  Random password using the format xxx-xxx-xxx-xxx.
	 */
	generate: function () {
		var primer = Math.random().toString(36).slice(2, 14);
		var random = primer.match(/.../g).join('-');
		return random;
	}

};

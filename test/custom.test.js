class TestError extends Error {
	constructor(message) {
		super(message + ': expected something else');
		this.showDiff = true;
		this.actual = null;
		this.expected = null;
	}
}

it('Should print message without a colon', () => { 
	throw new TestError('message without a colon'); 
});

it('Should print message with a colon(:)', () => {
	throw new TestError('message with a colon(:)');
});
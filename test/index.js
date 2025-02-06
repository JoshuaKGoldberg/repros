import assert from 'node:assert';
import got from 'got';

describe('test for e2e test errors', function () {
  it('get data from registry 2', async () => {
    await got(`https://google.com`);
  
    assert.ok(true);
  });
});
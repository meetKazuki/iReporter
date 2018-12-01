const request = require('request');

const baseUrl = 'http://localhost:3000/api/v1/red-flags';

let Record = {
  id: 1,
  type: '',
  location: '',
  status: '',
  comment: '',
};

describe('Record List API Exists', () => {
  describe('GET /api/v1/red-flags', () => {
    it('returns status code 200', (done) => {
      request.get(baseUrl, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        done();
      });
    });

    it('API Response should be valid JSON', (done) => {
      request.get(baseUrl, (err, res, body) => {
        expect(() => {
          JSON.parse(body);
        }).not.toThrow();

        done();
      });
    });
  });
});

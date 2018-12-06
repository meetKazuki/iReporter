import chai from 'chai';
import request from 'supertest';
import app from '../server';

let expect = chai.expect;

describe('Red-flag API Integration Tests', () => {
  describe('#GET / red-flags', () => {
    it('should get all red-flags', (done) => {
      request(app).get('/api/v1/red-flags')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.a('Content-Type', 'application/json');
          expect(res.body).to.be.empty();
          done();
        });
    });
  });
});

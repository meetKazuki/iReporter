import chai from 'chai';
import request from 'supertest';
import app from '../server';

let expect = chai.expect;

describe('Red-flag API Integration Tests', function () {
  describe('#GET / red-flags', function () {
    it('should get all red-flags', function (done) {
      request(app).get('/api/v1/red-flags')
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        // expect(res.body).to.be.a('Content-Type', 'application/json');
        // expect(res.body).to.be.empty;
        done();
      })
    });
  });
  // describe('#POST / red-flags', function() {
  //   it('should create a red-flag record', function(done) {
  //     request(app).post('/api/v1/red-flags').send()
  //   });
  // });
});
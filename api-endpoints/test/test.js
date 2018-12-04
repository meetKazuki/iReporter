var supertest = require('supertest');
var should = require('should');

var server = supertest.agent('http://localhost:3000');

describe('Sample Unit API Tests', function() {
  // should return home page
  it('should return home page', function(done) {
    // calling home page api
    server
    .get('/')
    .expect('Content-type', /json/)
    .expect(200) // the HTTP response
    .end(function(err, res) {
      // HTTP status code should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.body.error.should.equal(false);
      done();
    });
  });
});
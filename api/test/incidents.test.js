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
          expect(res.body).to.be.a('Object');
          done();
        });
    });
  });

  // describe('#POST / red-flags', () => {
  //   it('should post a red-flag', (done) => {
  //     const record = {
  //       id: 'a7c57f10-0baf-4f9b-a385-e18723593242',
  //       createdOn: Date.now(),
  //       type: 'red-flag',
  //       location: '6.6080° N, 3.6218° E',
  //       status: 'Draft',
  //       images: [],
  //       videos: [],
  //       comment: 'A dummy database',      
  //     };
  //     request(app).post('api/v1/red-flags').send(record).end((err, res) => {
  //       res.should.have.status(200);
  //       res.should.be.a('object');
  //       res.body.should.have.property('data');
  //       res.body.should.have.property('location');
  //       res.body.should.have.property('type');
  //       // RecordId = res.body.data.id;
  //     });
  //   });
  // });
});

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src';

chai.use(chaiHttp);

const { expect } = chai;

describe('Handle incoming requests on routes', () => {
  it('should return 200 and success message for the / route', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('Welcome to iReporter');
        done(err);
      });
  });

  it('should return a 404 for all invalid routes', (done) => {
    chai
      .request(app)
      .post('/api/v1')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error).to.equal('Endpoint doesn\'t exist');
        done(err);
      });
  });
});

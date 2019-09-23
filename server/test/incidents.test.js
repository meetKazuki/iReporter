import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src';

chai.use(chaiHttp);
const { expect } = chai;

describe.skip('POST /red-flag request', () => {
  it('should add a new red-flag record if details are correct', (done) => {
    chai
      .request(app)
      .post('/api/v1/red-flags')
      .send({
        type: 'red-flag',
        location: 'No 12 McNeil Street, Sabo, Yaba',
        comment: 'Test endpoint to see if everything is okay over here',
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(201);
        expect(res.body).to.have.property('data');
        expect(res.body.data).to.be.an('array');
        done(err);
      });
  });

  it('should return an error if no details are supplied', (done) => {
    chai
      .request(app)
      .post('/api/v1/red-flags')
      .send({})
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(406);
        expect(res.body).to.have.property('error');
        done(err);
      });
  });

  it('should return an error if record type is empty', (done) => {
    chai
      .request(app)
      .post('/api/v1/red-flags')
      .send({
        type: '',
        location: 'No 12 McNeil Street, Sabo, Yaba',
        comment: 'Test endpoint',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(406);
        expect(res.body).to.have.property('error');
        done(err);
      });
  });

  it("should return an error if record type isn't red-flag/intervention", (done) => {
    chai
      .request(app)
      .post('/api/v1/red-flags')
      .send({
        type: 'gfgdgh',
        location: 'No 12 McNeil Street, Sabo, Yaba',
        comment: 'Test endpoint',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(406);
        expect(res.body).to.have.property('error');
        done(err);
      });
  });

  it('should return an error if location is empty', (done) => {
    chai
      .request(app)
      .post('/api/v1/red-flags')
      .send({
        type: 'red-flag',
        location: '',
        comment: 'Test endpoint',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(406);
        expect(res.body).to.have.property('error');
        done(err);
      });
  });

  it('should return an error if location is invalid');

  it('should return an error if latitude/longitude is empty/invalid');

  it('should return an error if comment is empty', (done) => {
    chai
      .request(app)
      .post('/api/v1/red-flags')
      .send({
        type: 'red-flag',
        location: 'No 12 McNeil Street, Sabo-Yaba, Lagos',
        comment: '',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(406);
        expect(res.body).to.have.property('error');
        done(err);
      });
  });

  it('should return an error if comment is invalid', (done) => {
    chai
      .request(app)
      .post('/api/v1/red-flags')
      .send({
        type: 'red-flag',
        location: '',
        comment: 'The test',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(406);
        expect(res.body).to.have.property('error');
        done(err);
      });
  });
});

describe.skip('GET /red-flag requests', () => {
  it('should return the list of all the red-flags', (done) => {
    chai
      .request(app)
      .get('/api/v1/red-flags')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(200);
        expect(res.body).to.have.property('data');
        expect(res.body.data).to.be.an('array');
        done(err);
      });
  });

  it.skip('should retrieve the specific red-flag with the given ID', (done) => {
    chai
      .request(app)
      .get('/api/v1/red-flags/b1781782-6695-437e-a102-179b90a883c1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(200);
        expect(res.body).to.have.property('data');
        expect(res.body.data).to.be.an('array');
        done(err);
      });
  });

  it('should return an error if red-flag does not exist', (done) => {
    chai
      .request(app)
      .get('/api/v1/red-flags/10')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(404);
        expect(res.body).to.have.property('error');
        done(err);
      });
  });
});

describe.skip('PATCH /red-flag requests', () => {
  it('should update the location of red-flag record with the specified ID');

  it("should return an error if the ID of the red-flag doesn't exist", (done) => {
    chai
      .request(app)
      .patch('/api/v1/red-flags/:id/location')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(404);
        expect(res.body).to.have.property('error');
        done(err);
      });
  });

  it('should return an error if the ID of the red-flag is invalid');
});

describe.skip('DELETE red-flag request', () => {
  it('should delete a red-flag record with the specified ID');

  it('should return an error if the ID of the red-flag does not exist', (done) => {
    chai
      .request(app)
      .delete('/api/v1/red-flags/90')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.equal(404);
        expect(res.body.error).to.be.equal('record not found');
        done(err);
      });
  });

  it('should return an error if the ID of the red-flag is invalid');
});

import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src';
import { user, username } from '../mocks/users.mock';

chai.use(chaiHttp);
expect();

const baseURI = '/api/v1/auth';

describe('Auth routes', () => {
  context('Signup routes', () => {
    it('should successfully post to /auth/signup', (done) => {
      chai
        .request(app)
        .post(`${baseURI}/signup`)
        .send(user)
        .end((err, res) => {
          const { status, message, data } = res.body;
          expect(res).to.have.status(201);
          expect(status).to.eql('success');
          expect(message).to.eql('Signup successful!');
          expect(data).to.have.property('token');
          expect(data).to.have.property('user');
          expect(data.user).to.have.property('id');
          expect(data.user).to.have.property('firstName');
          expect(data.user).to.have.property('lastName');
          expect(data.user).to.have.property('username');
          expect(data.user).to.have.property('email');
          expect(data.user).to.not.have.property('password');
          done(err);
        });
    });

    specify('error if user signs up with an existing email', (done) => {
      chai
        .request(app)
        .post(`${baseURI}/signup`)
        .send(user)
        .end((err, res) => {
          const { status, message } = res.body;
          expect(res).to.have.status(409);
          expect(status).to.eql('error');
          expect(message).to.eql('User already exist');
          done(err);
        });
    });

    specify('error if user signs up with an existing username', (done) => {
      chai
        .request(app)
        .post(`${baseURI}/signup`)
        .send(username)
        .end((err, res) => {
          const { status, message } = res.body;
          expect(res).to.have.status(409);
          expect(status).to.eql('error');
          expect(message).to.eql('Username already in use');
          done(err);
        });
    });
  });
});

import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src';
import { user, username } from '../mocks/users.mock';

chai.use(chaiHttp);
expect();

const baseURI = '/api/v1/auth';

describe('Auth routes', () => {
  context('Signup route', () => {
    it('should successfully POST to /auth/signup', (done) => {
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

  context('Signin route', () => {
    it('should successfully POST to /auth/signin', (done) => {
      chai
        .request(app)
        .post(`${baseURI}/signin`)
        .send({ email: user.email, password: user.password })
        .end((err, res) => {
          const { status, message, data } = res.body;
          expect(res).to.have.status(200);
          expect(status).to.eql('success');
          expect(message).to.eql('Signin successful!');
          expect(data).to.be.an('object');
          expect(data).to.have.property('token');
          expect(data).to.have.property('user');
          expect(data.user).to.have.property('id');
          expect(data.user).to.have.property('email');
          expect(data.user).not.to.have.property('password');
          done(err);
        });
    });

    specify('error if user signs up with incorrect email', (done) => {
      chai
        .request(app)
        .post(`${baseURI}/signin`)
        .send({ email: 'banshee@ande.com', password: user.password })
        .end((err, res) => {
          const { status, message } = res.body;
          expect(res).to.have.status(401);
          expect(status).to.eql('error');
          expect(message).to.eql('Email/password is incorrect');
          done(err);
        });
    });

    specify('error if user signs up with incorrect password', (done) => {
      chai
        .request(app)
        .post(`${baseURI}/signin`)
        .send({ email: user.email, password: 'wrong password' })
        .end((err, res) => {
          const { status, message } = res.body;
          expect(res).to.have.status(401);
          expect(status).to.eql('error');
          expect(message).to.eql('Email/password is incorrect');
          done(err);
        });
    });
  });
});

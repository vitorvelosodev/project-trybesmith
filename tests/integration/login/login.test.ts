import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Should return an error if there is no username on the bodys request', async function () {
    const httpRequestBody = { password: 'testing'};

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.deep.equal({ message: '"username" and "password" are required' })
  });

  it('Should return an error if there is no password on the bodys request', async function () {
    const httpRequestBody = { username: 'tester' };

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.deep.equal({ message: '"username" and "password" are required' })
  });

  it('Should return invalid credentials and status 401 if username is invalid', async function () {
    const userMock = { username: 'Thor', password: 'trovão', vocation: 'Test', level: 10 }
    const httpRequestBody = { username: 'touro', password: 'trovão' };
    const mockLoginError = UserModel.build(userMock);

    sinon.stub(UserModel, 'findOne').resolves(mockLoginError);

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.deep.equal({ message: 'Username or password invalid' });
  });

  it('Should return invalid credentials and status 401 if password is invalid', async function () {
    const userMock = { username: 'Thor', password: 'trovão', vocation: 'Test', level: 10 }
    const httpRequestBody = { username: 'Thor', password: 'raio' };
    const mockLoginError = UserModel.build(userMock);

    sinon.stub(UserModel, 'findOne').resolves(mockLoginError);

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.deep.equal({ message: 'Username or password invalid' });
  });

  it('Should return a valid token if username and password are valid', async function () {
    const userMock = { username: 'Hagar', password: '$2a$10$OCkicakhpgsz41XAhGR0j.tEYjSSlD7warlY5SAyv1WIPjrcAkb0y', vocation: 'Test', level: 10 }
    const httpRequestBody = { username: 'Hagar', password: 'terrível' };
    const mockLoginSuccess = UserModel.build(userMock);

    sinon.stub(UserModel, 'findOne').resolves(mockLoginSuccess);

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.has.key('token');
  });
});

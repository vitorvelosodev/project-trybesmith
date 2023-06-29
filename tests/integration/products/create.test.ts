import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/model/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Should return an error if there is no name, price or orderId in req.body', async function () {
    // Arrange
    const httpRequestBody = { price: 10, orderId: 10 };

    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Error' });
  });

  it('Should return an object if everything goes through', async function () {
    // Arrange
    const httpRequestBody = { name: 'martelo boladão', price: '10', orderId: 10 };
    const mockCreateObj = ProductModel.build(httpRequestBody);
    sinon.stub(ProductModel, 'create').resolves(mockCreateObj);

    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal(mockCreateObj.dataValues);
  });
});

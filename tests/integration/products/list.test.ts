import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Should return an error if something goes wrong', async function() {
    sinon.stub(ProductModel, 'findAll').throws();
    const httpResponse = await chai.request(app).get('/products');

    expect(httpResponse.status).to.equal(500);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Internal Error' });
  });

  it('Should return an array of products if everything goes ok', async function() {
    const returnElement = {
        "id": 1,
        "name": "Pedra Filosofal",
        "price": "20 gold",
        "orderId": 100
      }

    const mockCreateObj = ProductModel.build(returnElement);
    sinon.stub(ProductModel, 'findAll').resolves([mockCreateObj]);

    const httpResponse = await chai.request(app).get('/products');

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal([mockCreateObj.dataValues]);
  });
});

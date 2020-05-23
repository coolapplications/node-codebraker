const app = require('./app');
const supertest = require('supertest');
const request = supertest(app); //Arange

describe('Testing Calculator', () => {
  test('Get the add Endpoint', async (done) => {
    //Act
    const response = await request.get('/calculator/add?value1=1&value2=3');

    //asset
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body.result).toBe(4);
    done();
  });

  test('Get the subtract Endpoint', async (done) => {
    //Act
    const response = await request.get('/calculator/sub?value1=1&value2=3');

    //asset
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body.result).toBe(-2);
    done();
  });
});

describe('Testing CodeBreaker', () => {
  describe('Testing isPositioned', () => {
    test('Get the isPositioned Endpoint', async (done) => {
      //Act
      const response = await request.get(
        '/codebreaker/isPositioned?value=0&position=0'
      );

      //asset
      expect(response.status).toBe(200);
      expect(response.type).toBe('application/json');
      expect(response.body.result).toBe(true);
      done();
    });

    test('Get the isPositioned Endpoint', async (done) => {
      //Act
      const response = await request.get(
        '/codebreaker/isPositioned?value=8&position=2'
      );

      //asset
      expect(response.status).toBe(200);
      expect(response.type).toBe('application/json');
      expect(response.body.result).toBe(false);
      done();
    });
  });

  describe('Testing itExist', () => {
    test('Get the itExist Endpoint', async (done) => {
      //Act
      const response = await request.get('/codebreaker/itExist?value=1');

      //asset
      expect(response.status).toBe(200);
      expect(response.type).toBe('application/json');
      expect(response.body.result).toBe(true);
      done();
    });

    test('Get the itExist Endpoint', async (done) => {
      //Act
      const response = await request.get('/codebreaker/itExist?value=8');

      //asset
      expect(response.status).toBe(200);
      expect(response.type).toBe('application/json');
      expect(response.body.result).toBe(false);
      done();
    });
  });

  describe('Testing guest', () => {
    test('Get the guest Endpoint', async (done) => {
      //Act
      const response = await request.get('/codebreaker/guest?value=0123');

      //asset
      expect(response.status).toBe(200);
      expect(response.type).toBe('application/json');
      expect(response.body.result).toBe('XXXX');
      done();
    });
    test('Get the guest Endpoint', async (done) => {
      //Act
      const response = await request.get('/codebreaker/guest?value=6789');

      //asset
      expect(response.status).toBe(200);
      expect(response.type).toBe('application/json');
      expect(response.body.result).toBe('');
      done();
    });
    test('Get the guest Endpoint', async (done) => {
      //Act
      const response = await request.get('/codebreaker/guest?value=1032');

      //asset
      expect(response.status).toBe(200);
      expect(response.type).toBe('application/json');
      expect(response.body.result).toBe('____');
      done();
    });
    test('Get the guest Endpoint', async (done) => {
      //Act
      const response = await request.get('/codebreaker/guest?value=0513');

      //asset
      expect(response.status).toBe(200);
      expect(response.type).toBe('application/json');
      expect(response.body.result).toBe('XX_');
      done();
    });
  });
  describe('Testing setSecret', () => {
    test('Get the setSecret Endpoint', async (done) => {
      const newSecret = '5678';

      //Act
      const response = await request.get(
        `/codebreaker/setsecret?value=${newSecret}`
      );

      //asset
      expect(response.status).toBe(200);
      expect(response.type).toBe('application/json');
      expect(response.body.result).toBeUndefined();
      done();
    });
  });
});

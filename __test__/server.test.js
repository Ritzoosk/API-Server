'use strict'

const {server} = require('../src/server.js');

const supertest = require('supertest');

const mockRequest = supertest(server);

describe('API SERVER:', () => {
  it('should create new item in db'), async () =>{
    const response = await mockRequest.post('/things').send({name: 'ted'})
    .then(results => {
      expect(results.status).toBe(201);
      expect(respones.body.record.name).toEqual('ted');
    })

  }

  it('should get an item from db'), async () =>{

    
  }

  it('should get all items from db'), async () =>{

    
  }


  it('should res 404', async () => {
    return mockRequest.get('/no-thing').then(data => {
      expect(data.status).toBe(404);
    });
  });

  it('should respond properly res with 500', () => {
    //TODO
  });

  it('should res to GET: /hello', async () => {
    const response = await mockRequest.get('/hello');
    //TODO
  });
});
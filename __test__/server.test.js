'use strict'

const {server} = require('../src/server.js');

const supertest = require('supertest');

const mockRequest = supertest(server);

describe('API SERVER:', () => {

  it('should create new item in db', async () => {
    const response = await mockRequest.post('/things').send({name: 'test-ted'})
    expect(response.status).toBe(201);
    expect(response.body.record.name).toEqual('test-ted');
    });

  it('should get an item from db', async () =>{
    const response = await mockRequest.get('/things/1');
    expect(response.status).toBe(200);
    console.log (`server retrieved one item from db: ${response.body}`)
    
  });

  it('should get all items from db', async () =>{
    const response = await mockRequest.get('/things');
    expect(response.status).tobe(200);
    
  });
});

  //lab 1
  // it('should res 404', async () => {
  //   return mockRequest.get('/no-thing').then(data => {
  //     expect(data.status).toBe(404);
  //   });
  // });

  // it('should respond properly res with 500', () => {
  //   //TODO
  // });

  // it('should res to GET: /hello', async () => {
  //   const response = await mockRequest.get('/hello');
  //   //TODO
  // });

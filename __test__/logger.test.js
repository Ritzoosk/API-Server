'use strict';

const loggerMiddleware = require('../src/middleware/logger.js')

describe('logger middleware', () => {

  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = lest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore
  });

  it('logs output', () => {
    loggerMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('on to the next middleware', () => {
    loggerMiddleware(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });

});